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
            <form className="max-w-2xl mx-auto mt-8 space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
                <FormFieldComponent control={form.control} name="firstName" label="Prénom" placeholder="Votre prénom"/>
                <FormFieldComponent control={form.control} name="lastName" label="Nom" placeholder="Votre nom"/>
                <FormFieldComponent control={form.control} name="email" label="Email" placeholder="Votre email"/>
                <FormFieldComponent control={form.control} name="message" label="Message" placeholder="Votre message" type="textarea"/>
                <FormButton loading={loading} success={success} text="Envoyer"/>
            </form>
        </Form>
    );
}