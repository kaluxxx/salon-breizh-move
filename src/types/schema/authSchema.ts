"use client"

import { z } from "zod"

export const AuthSchema = z.object({
    email: z.string().email("Veuillez entrer une adresse email valide"),
})


export type AuthFormValues = z.infer<typeof AuthSchema>