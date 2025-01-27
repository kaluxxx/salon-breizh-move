"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { type AuthFormValues, AuthSchema } from "@/types/schema/authSchema"
import { signIn, type SignInResponse } from "next-auth/react"
import type { Response } from "@/types/payloads/Response"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormFieldComponent } from "@/components/FormFieldComponent"
import { FormButton } from "@/components/FormButton"
import { useFormHandler } from "@/hooks/useFormHandler"
import { motion } from "framer-motion"

export default function LoginForm() {
    const router = useRouter()
    const form = useForm<AuthFormValues>({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
            email: "",
        },
    })

    const { loading, success, handleSubmit } = useFormHandler<AuthFormValues, SignInResponse>({
        onSubmit: async ({ email }) => {
            const result = await signIn("email", { email, redirect: false })
            if (result?.error) {
                throw new Error(result.error)
            }
            return { message: "Success", data: result } as Response<SignInResponse>
        },
        onSuccess: () => router.push("/"),
    })

    return (
        <Form {...form}>
            <motion.form
                className="space-y-6"
                onSubmit={form.handleSubmit(handleSubmit)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <FormFieldComponent control={form.control} name="email" label="Email" placeholder="votre@email.com" />
                <FormButton
                    loading={loading}
                    success={success}
                    text="Se connecter"
                />
            </motion.form>
        </Form>
    )
}

