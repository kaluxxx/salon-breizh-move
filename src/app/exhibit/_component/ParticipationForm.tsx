"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {QuoteRequestFormValues, QuoteRequestSchema} from "@/types/schema/quoteRequestSchema";
import {useFormHandler} from "@/hooks/useFormHandler";
import {HTTPStatus} from "@/types/enums/HTTPStatus";
import {Form} from "@/components/ui/form";
import {FormFieldComponent} from "@/components/FormFieldComponent";
import {FormButton} from "@/components/FormButton";
import {createQuoteRequest} from "@/app/action/quoteActions";
import {QuoteRequest} from "@prisma/client";

export default function ParticipationForm() {
    const form = useForm<QuoteRequestFormValues>({
        resolver: zodResolver(QuoteRequestSchema),
        defaultValues: {
            company: "",
            name: "",
            function: "",
            phone: "",
            email: "",
        },
    })

    const {loading, success, handleSubmit} = useFormHandler<QuoteRequestFormValues, QuoteRequest>({
        onSubmit: async (values) => {
            const result = await createQuoteRequest(values);
            if (result.status !== HTTPStatus.CREATED) {
                throw new Error(result.message);
            }
            return result;
        }
    });
    return (
        <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormFieldComponent control={form.control} name="company" label="Entreprise"
                                        placeholder="Nom de l'entreprise" required/>
                    <FormFieldComponent control={form.control} name="name" label="Nom" placeholder="Votre nom"
                                        required/>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormFieldComponent control={form.control} name="function" label="Fonction"
                                        placeholder="Votre fonction" required/>
                    <FormFieldComponent control={form.control} name="phone" label="Téléphone"
                                        placeholder="Votre téléphone" required/>
                </div>
                <FormFieldComponent control={form.control} name="email" label="Email" placeholder="Votre email"
                                    required/>
                <FormButton loading={loading} success={success} text="Demande de devis" variant="secondary"/>
            </form>
        </Form>
    )
}