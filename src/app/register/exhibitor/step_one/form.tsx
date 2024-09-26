"use client";
import {Form} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FieldError, FieldErrorsImpl, Merge, useFieldArray, useForm, UseFormRegister} from "react-hook-form";
import {ExhibitorFormValues, ExhibitorSchema, getExhibitorDefaultValues} from "@/schema/exhibitorSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useExhibitorRegistrationFormContext} from "@/hooks/useRegistrationFormContext";
import {FC, useEffect, useState} from "react";
import {FormFieldItem} from "@/components/formFieldItem";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import useWatchBoolean from "@/hooks/useWatchBoolean";
import {Input} from "@/components/ui/input";
import {MultiSelect} from "@/components/multiSelect";
import {getThematics} from "@/app/action/thematicActions";
import {useQuery} from "@tanstack/react-query";
import {useRouter} from "next/navigation";

interface CoExhibitorsFieldProps {
    fields: { id: string }[];
    remove: (index: number) => void;
    append: (value: { companyName: string }) => void;
    register: UseFormRegister<ExhibitorFormValues>;
}

const CoExhibitorsField: FC<CoExhibitorsFieldProps> = ({fields, remove, append, register}) => (
    <>
        {fields.map((field, index) => (
            <div key={field.id} className="flex items-end space-x-2 mb-2">
                <Input
                    {...register(`coExhibitors.${index}.companyName`)}
                    placeholder="Nom du co-exposant"
                />
                <Button variant="destructive" type="button" onClick={() => fields.length > 1 && remove(index)}>
                    Supprimer
                </Button>
            </div>
        ))}
        {fields.length <= 2 && (
            <Button type="button" onClick={() => fields.length < 3 ? append({companyName: ""}) : null}>
                Ajouter un co-exposant
            </Button>
        )}
    </>
);

export default function StepOneForm() {
    const router = useRouter();
    const formContext = useExhibitorRegistrationFormContext();
    const [isBillingAddressSame, setIsBillingAddressSame] = useState<boolean | null>(null);
    const [hasSpecialRequest, setHasSpecialRequest] = useState<boolean | null>(null);
    const [hasCoExhibitor, setHasCoExhibitor] = useState<boolean>(false);

    const {data} = useQuery({
        queryKey: ["thematics"],
        queryFn: getThematics,
    });

    const form = useForm<ExhibitorFormValues>({
        resolver: zodResolver(ExhibitorSchema),
        mode: "onTouched",
        defaultValues: getExhibitorDefaultValues(formContext.exhibitorRegistration?.exhibitor)
    });

    const {fields, append, remove} = useFieldArray<ExhibitorFormValues>({
        control: form.control,
        name: "coExhibitors"
    });

    const addressFields = form.watch(["address.address", "address.postalCode", "address.city", "address.email", "address.phone"]);
    const isAddressComplete = Object.values(addressFields).every(Boolean);

    useWatchBoolean(() => form.watch("isSameBillingAddress"), setIsBillingAddressSame, !!isBillingAddressSame, "true", "false");
    useWatchBoolean(() => form.watch("hasSpecialRequest"), setHasSpecialRequest, !!hasSpecialRequest, "yes", "no");
    useWatchBoolean(() => form.watch("hasCoExhibitors"), setHasCoExhibitor, hasCoExhibitor, "yes", "no", (hasCoExhibitor) => {
        if (hasCoExhibitor) {
            append({companyName: ""});
        } else {
            fields.forEach((_, index) => remove(index));
        }
    });

    useEffect(() => {
        form.setValue("billingAddress", isBillingAddressSame ? form.getValues("address") : {
            address: "",
            additionalAddress: "",
            postalCode: "",
            city: "",
            email: "",
            phone: ""
        });
    }, [isBillingAddressSame]);

    useEffect(() => {
        const errors = form.formState.errors;

        if (errors.coExhibitors?.length) {
            const coExhibitorsErrors = errors.coExhibitors as Array<Merge<FieldError, FieldErrorsImpl<{
                companyName: string
            }>> | undefined>;
            for (const error of coExhibitorsErrors) {
                if (error?.companyName) {
                    form.setError(`coExhibitors`, {
                        type: "manual",
                        message: "Veuillez renseignez le nom de vos co-exposants"
                    });
                }
            }
        }

    }, [form.formState.errors?.coExhibitors]);

    function onSubmit(values: ExhibitorFormValues) {
        formContext.updateRegistrationData({exhibitor: values});
        router.push("/register/exhibitor/step_two");
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white p-6 rounded-lg shadow space-y-4 md:w-2/3">
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl font-bold text-left">
                            A. Informations sur l'entreprise
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 px-2">
                            <Accordion
                                type="single"
                                collapsible
                                defaultValue="sub-item-1"
                            >
                                <AccordionItem value="sub-item-1">
                                    <AccordionTrigger className="text-lg font-bold">
                                        Exposant principal
                                    </AccordionTrigger>
                                    <AccordionContent className="space-y-4 px-2">
                                        <FormFieldItem
                                            name="companyName"
                                            label="Nom de l'entreprise"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="address.address"
                                            label="Adresse"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="address.additionalAddress"
                                            label="Complément d'adresse"
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="address.postalCode"
                                            label="Code postal"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="address.city"
                                            label="Ville"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="address.email"
                                            label="Email de l'entreprise"
                                            required
                                            type="email"
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="address.phone"
                                            label="Téléphone de l'entreprise"
                                            required type="tel"
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="siret"
                                            label="Numéro de SIRET"
                                            required control={form.control}
                                        />
                                        <FormFieldItem
                                            name="tvaNumber"
                                            label="Numéro de TVA"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="apeCode"
                                            label="Code APE"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            label="Voulez-vous utiliser la même adresse pour la facturation ?"
                                            name="isSameBillingAddress"
                                            control={form.control}
                                            required
                                            component={(
                                                <Select
                                                    disabled={!isAddressComplete}
                                                    required
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Veuillez choisir..."/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="true">Utiliser la même
                                                            adresse</SelectItem>
                                                        <SelectItem value="false">Utiliser une autre
                                                            adresse</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {isBillingAddressSame !== null && !isBillingAddressSame &&
                                            <>
                                                <FormFieldItem
                                                    name="billingAddress.address"
                                                    label="Adresse de facturation"
                                                    required
                                                    control={form.control}
                                                />
                                                <FormFieldItem
                                                    name="billingAddress.additionalAddress"
                                                    label="Complément d'adresse de facturation"
                                                    control={form.control}
                                                />
                                                <FormFieldItem
                                                    name="billingAddress.postalCode"
                                                    label="Code postal de facturation"
                                                    required
                                                    control={form.control}
                                                />
                                                <FormFieldItem
                                                    name="billingAddress.city"
                                                    label="Ville de facturation"
                                                    required
                                                    control={form.control}
                                                />
                                            </>
                                        }
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="sub-item-2">
                                    <AccordionTrigger className="text-lg font-bold">
                                        Responsable de l'entreprise
                                    </AccordionTrigger>
                                    <AccordionContent className="space-y-4 px-2">
                                        <FormFieldItem
                                            name="companyManager.civility"
                                            label="Civilité"
                                            required
                                            control={form.control}
                                            component={(
                                                <Select>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Veuillez choisir..."/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="MR">Monsieur</SelectItem>
                                                        <SelectItem value="MRS">Madame</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        <FormFieldItem
                                            name="companyManager.firstName"
                                            label="Prénom"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="companyManager.lastName"
                                            label="Nom"
                                            required
                                            control={form.control}
                                        />

                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="sub-item-3">
                                    <AccordionTrigger className="text-lg font-bold gap-4">
                                        <span className="flex justify-between w-full">
                                            <span>Responsable du stand</span>
                                            <span className="text-sm font-normal">(suivi du dossier administratif et gestion du stand)</span>
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="space-y-4 px-2">
                                        <FormFieldItem
                                            name="standManager.civility"
                                            label="Civilité"
                                            required
                                            control={form.control}
                                            component={(
                                                <Select>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Veuillez choisir..."/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="MR">Monsieur</SelectItem>
                                                        <SelectItem value="MRS">Madame</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        <FormFieldItem
                                            name="standManager.firstName"
                                            label="Prénom"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="standManager.lastName"
                                            label="Nom"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="standManager.email"
                                            label="Email"
                                            type="email"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="standManager.phone"
                                            label="Téléphone"
                                            required
                                            control={form.control}
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="sub-item-4">
                                    <AccordionTrigger className="text-lg font-bold gap-4">
                                        <span className="flex justify-between w-full">
                                            <span>Contact sur site</span>
                                            <span className="text-sm font-normal">(coordonnées d'une personne joignable en montage / démontage)</span>
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="space-y-4 px-2">
                                        <FormFieldItem
                                            name="onSiteContact.civility"
                                            label="Civilité"
                                            required
                                            control={form.control}
                                            component={(
                                                <Select>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Veuillez choisir..."/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="MR">Monsieur</SelectItem>
                                                        <SelectItem value="MRS">Madame</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        <FormFieldItem
                                            name="onSiteContact.firstName"
                                            label="Prénom"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="onSiteContact.lastName"
                                            label="Nom"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="onSiteContact.email"
                                            label="Email"
                                            type="email"
                                            required
                                            control={form.control}
                                        />
                                        <FormFieldItem
                                            name="onSiteContact.phone"
                                            label="Téléphone"
                                            required
                                            control={form.control}
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl font-bold text-left">
                            B. Guide du salon et site internet
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 px-2">
                            <p className="text-sm">
                                Ce guide est distribué gratuitement pendant le salon. Il contient les informations
                                nécessaires à une bonne visite : plan, coordonnées et activités des exposants,
                                animations.
                                Pour éviter d'être démarché en direct, ces informations ne sont reprises qu'en
                                partie
                                sur le
                                site internet www.salon-technotrans.com
                            </p>
                            <FormFieldItem
                                name="showGuide.companyName"
                                label="Nom de l'entreprise"
                                required
                                control={form.control}
                            />
                            <FormFieldItem
                                name="showGuide.address.address"
                                label="Adresse"
                                required
                                control={form.control}
                            />
                            <FormFieldItem
                                name="showGuide.address.additionalAddress"
                                label="Complément d'adresse"
                                control={form.control}
                            />
                            <FormFieldItem
                                name="showGuide.address.postalCode"
                                label="Code postal"
                                required
                                control={form.control}
                            />
                            <FormFieldItem
                                name="showGuide.address.city"
                                label="Ville"
                                required
                                control={form.control}
                            />
                            <FormFieldItem
                                name="showGuide.address.email"
                                label="Email de l'entreprise"
                                required
                                type="email"
                                control={form.control}
                            />
                            <FormFieldItem
                                name="showGuide.address.phone"
                                label="Téléphone de l'entreprise"
                                required
                                control={form.control}
                            />
                            <FormFieldItem
                                name="showGuide.thematics"
                                label="Sous quelle(s) rubrique (s) souhaitez-vous apparaître ?"
                                required
                                control={form.control}
                                component={
                                    <MultiSelect
                                        options={data ? data.map(({id, name}) => ({label: name, value: id})) : []}
                                        placeholder="Veuillez choisir..."
                                        variant="inverted"
                                        maxCount={3}
                                        maxSelection={3}
                                    />
                                }
                            />
                            <FormFieldItem
                                name="showGuide.businessDescription"
                                label="Description de votre activité"
                                required
                                control={form.control}
                            />
                            <FormFieldItem
                                name="showGuide.website"
                                label="Site web"
                                required
                                control={form.control}
                            />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl font-bold text-left">
                            C. Emplacement du stand
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 px-2">
                            <p className="text-sm">
                                Nous respecterons au mieux vos souhaits sans pouvoir vous garantir un emplacement
                                particulier.
                            </p>
                            <FormFieldItem
                                label="Souhaitez-vous des voisinages particuliers ?"
                                name="hasSpecialRequest"
                                control={form.control}
                                required
                                component={(
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Veuillez choisir..."/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="yes">Oui</SelectItem>
                                            <SelectItem value="no">Non</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {hasSpecialRequest === true && (
                                <>
                                    <FormFieldItem
                                        name="closeTo"
                                        label="Proche de"
                                        control={form.control}
                                    />
                                    <FormFieldItem
                                        name="awayFrom"
                                        label="Loin de"
                                        control={form.control}
                                    />
                                    <FormFieldItem
                                        name="comments"
                                        label="Commentaires"
                                        control={form.control}
                                    />
                                </>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-xl font-bold text-left">
                            D. Co-exposition
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 px-2">
                            <div className="text-sm">
                                <p>
                                    La co-exposition permet à un exposant principal d’accueillir sur son stand ou
                                    une
                                    surface nue d’exposition une ou plusieurs autres sociétés, appelées alors
                                    co-exposantes.
                                </p>
                                <p>
                                    TECHNOTRANS statue sur les demandes de réservation (exposant principal et
                                    co-exposant), sans être tenu de justifier ses décisions. Le postulant refusé ne
                                    peut
                                    se prévaloir du fait qu’il a été admis au(x) salons précédents, pas plus qu’il
                                    ne
                                    peut arguer que son inscription a été sollicitée par TECHNOTRANS.
                                </p>
                                <p>
                                    Une fois leur(s) inscription(s) validée(s), vous recevrez un dossier à nous
                                    retourner complèté.
                                </p>
                            </div>
                            <FormFieldItem
                                label="Souhaitez-vous co-exposer ?"
                                name="hasCoExhibitors"
                                control={form.control}
                                required
                                component={(
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Veuillez choisir..."/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="yes">Oui</SelectItem>
                                            <SelectItem value="no">Non</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {hasCoExhibitor && (
                                <FormFieldItem
                                    name="coExhibitors"
                                    label="Nom des co-exposants"
                                    control={form.control}
                                    required={hasCoExhibitor}
                                    component={
                                        <CoExhibitorsField
                                            fields={fields}
                                            remove={remove}
                                            append={append}
                                            register={form.control.register}
                                        />
                                    }
                                />
                            )}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className='py-4 space-x-8'>
                    <Button type='submit'>Suivant</Button>
                </div>
            </form>
        </Form>
    );
}