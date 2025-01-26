import {z} from "zod";

export const QuoteRequestSchema = z.object({
    company: z.string().min(1, "Veuillez saisir le nom de votre entreprise"),
    name: z.string().min(1, "Veuillez saisir votre nom"),
    function: z.string().min(1, "Veuillez saisir votre fonction"),
    phone: z.string().min(1, "Veuillez saisir votre numéro de téléphone"),
    email: z.string().email("Veuillez saisir une adresse email valide"),
});

export type QuoteRequestFormValues = z.infer<typeof QuoteRequestSchema>;