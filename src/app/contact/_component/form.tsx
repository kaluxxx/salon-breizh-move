"use client";

import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {ContactFormValues, ContactSchema} from "@/types/schema/contactSchema";
import {createContact} from "@/app/action/contactActions";
import {HTTPStatus} from "@/types/enums/HTTPStatus";
import {Form} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormFieldComponent} from "@/components/FormFieldComponent";
import {FormButton} from "@/components/FormButton";
import {useFormHandler} from "@/hooks/useFormHandler";
import {Contact} from "@prisma/client";

export default function ContactForm() {
    const router = useRouter();
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
    });

    const {loading, success, handleSubmit} = useFormHandler<ContactFormValues, Contact>({
        onSubmit: async (values) => {
            const result = await createContact(values);
            if (result.status !== HTTPStatus.CREATED || !result.data) {
                throw new Error(result.message);
            }
            return result;
        },
        onSuccess: () => router.push("/"),
    });

    return (
        <Form {...form}>
            <form className="flex-1 w-full lg:max-w-xl mx-auto space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormFieldComponent control={form.control} name="firstName" label="Prénom"
                                        placeholder="Votre prénom" required/>
                    <FormFieldComponent control={form.control} name="lastName" label="Nom" placeholder="Votre nom"
                                        required/>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormFieldComponent control={form.control} name="email" label="Email" placeholder="Votre email"
                                        required/>
                    <FormFieldComponent control={form.control} name="companyName" label="Nom de l'entreprise"
                                        placeholder="Nom de l'entreprise"/>

                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormFieldComponent control={form.control} name="companyFunction" label="Fonction"
                                        placeholder="Votre fonction"/>
                    <FormFieldComponent control={form.control} name="phone" label="Téléphone"
                                        placeholder="Votre téléphone"/>
                </div>
                <FormFieldComponent control={form.control} name="message" label="Message" placeholder="Votre message"
                                    type="textarea" required/>
                <FormButton loading={loading} success={success} text="Envoyer"/>
            </form>
        </Form>
    );
}