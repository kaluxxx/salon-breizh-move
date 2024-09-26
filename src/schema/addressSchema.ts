import {z} from "zod";

export const AddressSchema = z.object({
    address: z.string().min(1, {message: "L'adresse ne peut pas être vide"}),
    additionalAddress: z.string().optional(),
    postalCode: z.string().min(1, {message: "Le code postal ne peut pas être vide"})
        .regex(/^\d{5}$/, {message: "Le code postal doit contenir 5 chiffres"}),
    city: z.string().min(1, {message: "La ville ne peut pas être vide"}),
    email: z.string().email({message: "L'email n'est pas valide"}),
    phone: z.string().min(1, {message: "Le téléphone ne peut pas être vide"})
        .regex(/^0[1-9]([-.\s]?\d{2}){4}$/, {message: "Le téléphone n'est pas valide (exemple: 0123456789)"}),
});