"use client";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import AuthSchema from "@/schema/authSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {signIn} from "next-auth/react";
import {Check, Loader, Mail} from "lucide-react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useToast} from "@/hooks/useToast";
import {ToastAction} from "@/components/ui/toast";

export default function LoginForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);
    const {toast} = useToast();

    const form = useForm<z.infer<typeof AuthSchema>>({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit({email}: z.infer<typeof AuthSchema>) {
        setLoading(true);
        setSuccess(null);

        try {
            const result = await signIn('email', {
                email,
                redirect: false,
            });

            console.log(result);
            if (result?.error) {
                if (result.error === "\"Error: User not found\"") {
                    setSuccess(false);
                    toast({
                        title: "Erreur",
                        description: "Aucun utilisateur trouvé avec cet email.",
                    });
                } else {
                    setSuccess(false);
                    toast({
                        title: "Erreur",
                        description: "Une erreur est survenue lors de l'envoi de l'email.",
                        action: <ToastAction altText="Try again" onClick={() => onSubmit({ email })}>Réessayer</ToastAction>,
                    });
                }
            } else {
                setSuccess(true);
                toast({
                    title: "Email envoyé",
                    description: "Un email vous a été envoyé avec un lien de connexion.",
                });
            }
        } catch (error) {
            console.log(error);
            setSuccess(false);
            toast({
                title: "Erreur",
                description: "Une erreur est survenue lors de l'envoi de l'email.",
                action: <ToastAction altText="Try again" onClick={() => onSubmit({ email })}>Réessayer</ToastAction>,
            });
        } finally {
            setLoading(false);
        }
    }

    function getIcon() {
        if (loading) {
            return <Loader className="animate-spin"/>;
        }
        return success === true ? <Check/> : <Mail/>;
    }

    return (
        <Form {...form}>
            <form className="max-w-md mt-8 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Votre email" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button
                    className="bg-primary text-secondary rounded-md p-2 flex items-center justify-center gap-4">
                    {getIcon()}
                    <span>Envoyer</span>
                </Button>
            </form>
        </Form>
    )
}