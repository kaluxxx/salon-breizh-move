import {z} from "zod";

export const BadgeRequestSchema = z.object({
    name: z.string().min(1, "Le nom est requis"),
    email: z.string().email("L'email est invalide"),
    company: z.string().min(1, "Le nom de l'entreprise est requis"),
    jobTitle: z.string().min(1, "La fonction est requise"),
});

export type BadgeRequestFormValues = z.infer<typeof BadgeRequestSchema>;