"use client"

import { z } from "zod"

const AuthSchema = z.object({
    email: z.string().email("Veuillez entrer une adresse email valide"),
})

export default AuthSchema