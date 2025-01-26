import {z} from "zod";

export const ContactSchema = z.object({
    firstName: z.string().min(1, "Veuillez saisir un prénom"),
    lastName: z.string().min(1, "Veuillez saisir un nom"),
    email: z.string().email("Veuillez saisir une adresse email valide"),
    companyName: z.string().optional(),
    companyFunction: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().min(1, "Veuillez saisir un message"),
});

export type ContactFormValues = z.infer<typeof ContactSchema>;

