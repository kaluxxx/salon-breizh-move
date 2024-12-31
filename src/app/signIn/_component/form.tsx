"use client";

import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {AuthFormValues, AuthSchema} from "@/types/schema/authSchema";
import {signIn} from "next-auth/react";
import {Form} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormFieldComponent} from "@/components/FormFieldComponent";
import {FormButton} from "@/components/FormButton";
import {useFormHandler} from "@/hooks/useFormHandler";

export default function LoginForm() {
    const router = useRouter();
    const form = useForm<AuthFormValues>({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
            email: "",
        },
    });

    const {loading, success, handleSubmit} = useFormHandler({
        onSubmit: async ({email}) => {
            const result = await signIn('email', {email, redirect: false});
            if (result?.error) {
                throw new Error(result.error);
            }
            return result;
        },
        onSuccess: () => router.push("/")
    });

    return (
        <Form {...form}>
            <form className="max-w-md mt-8 space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
                <FormFieldComponent control={form.control} name="email" label="Email" placeholder="Votre email"/>
                <FormButton loading={loading} success={success} text="Envoyer"/>
            </form>
        </Form>
    );
}