"use client"

import {useForm} from "react-hook-form";
import {useFormHandler} from "@/hooks/useFormHandler";
import {zodResolver} from "@hookform/resolvers/zod";
import {BadgeRequest} from "@prisma/client";
import {BadgeRequestFormValues, BadgeRequestSchema} from "@/types/schema/badgeRequestSchema";
import {HTTPStatus} from "@/types/enums/HTTPStatus";
import {createBadgeRequest} from "@/app/action/badgeActions";
import {FormFieldComponent} from "@/components/FormFieldComponent";
import {FormButton} from "@/components/FormButton";
import {Form} from "@/components/ui/form";


export default function BadgeRequestForm() {
    const form = useForm<BadgeRequestFormValues>({
        resolver: zodResolver(BadgeRequestSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            jobTitle: "",
        },
    })

    const {loading, success, handleSubmit} = useFormHandler<BadgeRequestFormValues, BadgeRequest>({
        onSubmit: async (values) => {
            const result = await createBadgeRequest(values);
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
                    <FormFieldComponent control={form.control} name="name" label="Nom" placeholder="Votre nom" required/>
                    <FormFieldComponent control={form.control} name="email" label="Email" placeholder="Votre email" required/>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormFieldComponent control={form.control} name="company" label="Entreprise" placeholder="Nom de l'entreprise" required/>
                    <FormFieldComponent control={form.control} name="jobTitle" label="Fonction" placeholder="Votre fonction" required/>
                </div>
                <FormButton loading={loading} success={success} text="Demander un badge" variant="secondary"/>
            </form>
        </Form>
    )
}

