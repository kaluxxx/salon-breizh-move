"use client";

import DOMPurify from "dompurify";
import {useExhibitorRegistrationFormContext} from "@/hooks/useRegistrationFormContext";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {CartFormValues, CartSchema, getCartDefaultValues} from "@/schema/cartSchema";
import {useQuery} from "@tanstack/react-query";
import {Form} from "@/components/ui/form";
import {useRouter} from "next/navigation";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {FormFieldItem} from "@/components/formFieldItem";
import {getStands} from "@/app/action/standAction";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Table, TableHead, TableBody, TableHeader, TableRow, TableCell} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ChangeEvent, useEffect} from "react";

const FEE_PER_EXHIBITOR = 250;

export default function StepTwoForm() {
    const router = useRouter();
    const formContext = useExhibitorRegistrationFormContext();

    const {data, isFetched} = useQuery({
        queryKey: ["stands"],
        queryFn: getStands,
    });

    const form = useForm<CartFormValues>({
        resolver: zodResolver(CartSchema),
        mode: "onTouched",
        defaultValues: getCartDefaultValues(formContext.exhibitorRegistration?.cart),
    });

    function sanitizeHtml(html: string) {
        return DOMPurify.sanitize(html.replace(/<br\s*\/?>/gi, ''));
    }

    function calculateTotalPrice() {
        const variants = form.getValues().variants || [];
        const variantsTotal = variants.reduce((total, variant) => {
            const price = variant.price ?? 0;
            const quantity = parseInt(variant.quantity as string, 10) || 0;
            return total + price * quantity;
        }, 0);
        const fees = form.getValues().fees || 0;
        return variantsTotal + fees;
    }

    function updateRegistrationFees(event: ChangeEvent<HTMLInputElement>) {
        const fees = parseInt(event.target.value, 10) * FEE_PER_EXHIBITOR;
        form.setValue("fees", fees);
    }

    function onSubmit(values: CartFormValues) {
        router.push("/register/exhibitor/confirmation");
    }

    useEffect(() => {
        const subscription = form.watch((_, {name, type}) => {
            if (type === "change" && name?.endsWith("quantity")) {
                const index = parseInt(name.split(".")[1], 10);
                const variant = data?.find(stand => stand.id === form.watch("stand"))?.variants[index];
                if (!variant) {
                    return;
                }
                form.setValue(`variants.${index}.name`, variant.name);
                form.setValue(`variants.${index}.price`, variant.price ?? 0);
                form.setValue(`variants.${index}.id`, variant.id);
            }
            const total = calculateTotalPrice();
            formContext.updateRegistrationData({cart: {...form.getValues(), total}});
        });
        return () => subscription.unsubscribe();
    }, [form, data]);

    useEffect(() => {

    }, [form.getValues()]);

    return (
        <Form {...form}>
            <form
                className="bg-white p-6 rounded-lg shadow space-y-4 w-full md:w-2/3"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl font-bold text-left">
                            A. Frais d'inscription
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 px-2">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-red-500">*</TableHead>
                                        <TableHead>Prix HT</TableHead>
                                        <TableHead className="text-right">Quantité</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="space-y-4">
                                            <p>{FEE_PER_EXHIBITOR} € par exposant principal et par co-exposant(s).</p>
                                            <p>Indiquer le nombre (exposant principal + co-exposant(s)) en quantité.</p>
                                        </TableCell>
                                        <TableCell>250 €</TableCell>
                                        <TableCell align="right">
                                            <FormFieldItem
                                                component={
                                                    <Input
                                                        className="w-[100px] text-right"
                                                        onChange={updateRegistrationFees}
                                                        type="number"
                                                        min={1}
                                                    />
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <p>Les frais d’inscription sont obligatoires et comprennent :</p>
                            <ul className="list-disc list-inside">
                                <li>Les frais de gestion de votre dossier</li>
                                <li>L’accès à l’espace exposant sécurisé sur salon-technotrans.com</li>
                                <li>Votre inscription détaillée sur la page exposant du site internet (coordonnées,
                                    activités, descriptif, logo sur salon-technotrans.fr)
                                </li>
                                <li>L’accès à l’application de scan des badges "Eventmaker Keeptrack"</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl font-bold text-left">
                            B. Choix du stand
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 px-2">
                            {isFetched && data && (
                                <>
                                    <FormFieldItem
                                        name="stand"
                                        label="Type de stand"
                                        required
                                        control={form.control}
                                        component={
                                            <Select
                                                required
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Veuillez choisir..."/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {data?.map((stand) => (
                                                        <SelectItem key={stand.id} value={stand.id}>
                                                            {stand.type}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        }
                                    />
                                    {data.filter((stand) => stand.id === form.watch("stand")).map((stand) => (
                                        <>
                                            <Card key={stand.id} className="bg-secondary shadow rounded-lg">
                                                <CardHeader className="text-center">
                                                    <CardTitle
                                                        className="text-3xl font-bold">{stand.type}</CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    {stand.variants.map((variant, index) => (
                                                        <>
                                                            <div key={variant.id} className="gap-4 space-y-2">
                                                                <h2 className="text-2xl font-bold">{variant.name}</h2>
                                                                <div
                                                                    dangerouslySetInnerHTML={{__html: sanitizeHtml(variant.description)}}
                                                                    className="space-y-2 rich-text"
                                                                />
                                                            </div>
                                                            {stand.variants.length - 1 !== index && <Separator
                                                                className="bg-black h-1 rounded-lg w-2/3 mx-auto"/>}
                                                        </>

                                                    ))}
                                                </CardContent>
                                            </Card>
                                            {form.formState.errors.variants && (
                                                <p className="text-red-500 text-sm">
                                                    {form.formState.errors.variants.root?.message}
                                                </p>
                                            )}
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="w-[200px]">
                                                            Stand
                                                        </TableHead>
                                                        <TableHead>Prix HT</TableHead>
                                                        <TableHead
                                                            className="max-w-[200px] text-right">Quantité</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {stand.variants.map((variant, index) => (
                                                        <TableRow key={variant.id}>
                                                            <TableCell>{variant.name}</TableCell>
                                                            <TableCell>{variant.price ? variant.price + " €" : "Voir description"}
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                <FormFieldItem
                                                                    name={`variants.${index}.quantity`}
                                                                    control={form.control}
                                                                    component={
                                                                        variant.price ? (
                                                                            <Select>
                                                                                <SelectTrigger
                                                                                    className="max-w-[200px]">
                                                                                    <SelectValue
                                                                                        placeholder="Veuillez choisir..."/>
                                                                                </SelectTrigger>
                                                                                <SelectContent>
                                                                                    {variant.maxSize && variant.minSize ? (
                                                                                        <>
                                                                                            <SelectItem
                                                                                                value={String(0)}>
                                                                                                0
                                                                                            </SelectItem>
                                                                                            {Array.from({length: variant.maxSize - variant.minSize + 1}, (_, i) => i + variant.minSize!).map((quantity) => (
                                                                                                <SelectItem
                                                                                                    key={quantity}
                                                                                                    value={String(quantity)}>
                                                                                                    {quantity}
                                                                                                </SelectItem>
                                                                                            ))}
                                                                                        </>
                                                                                    ) : (
                                                                                        Array.from({length: 10}, (_, i) => i + 1).map((quantity) => (
                                                                                            <SelectItem key={quantity}
                                                                                                        value={String(quantity)}>
                                                                                                {quantity}
                                                                                            </SelectItem>
                                                                                        ))
                                                                                    )}
                                                                                </SelectContent>
                                                                            </Select>
                                                                        ) : variant.minSize && variant.maxSize &&
                                                                            <Input
                                                                                type="number"
                                                                                min={variant.minSize}
                                                                                max={variant.maxSize}
                                                                            /> || null
                                                                    }
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </>
                                    ))}
                                </>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="py-4 space-x-8 flex justify-between">
                    <Button type="button" onClick={() => router.push("/register/exhibitor/step_one")}>Précédent</Button>
                    <Button type="submit">Suivant</Button>
                </div>
            </form>
        </Form>
    );
}