import {z} from "zod";

export const PersonSchema = z.object({
    civility: z.string().min(1, {message: "La civilité est requise"}),
    firstName: z.string().min(1, {message: "Le prénom est requis"}),
    lastName: z.string().min(1, {message: "Le nom est requis"}),
    email: z.string().email({message: "L'email n'est pas valide"}),
    phone: z.string().min(1, {message: "Le téléphone est requis"})
        .regex(/^0[1-9]([-.\s]?\d{2}){4}$/, {message: "Le téléphone n'est pas valide (exemple: 0123456789)"})
});


export const PersonSchemaWithoutEmailAndPhone = PersonSchema.omit({
    email: true,
    phone: true,
});
