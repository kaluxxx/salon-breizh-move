import {z} from "zod";
import {AddressSchema} from "@/types/schema/addressSchema";

export const ShowGuideSchema = z.object({
    companyName: z.string().min(1, {message: "Le nom de l'entreprise ne peut pas être vide"}),
    address: AddressSchema,
    thematics: z.array(z.string())
        .min(1, {message: "Veuillez sélectionner au moins une rubrique"})
        .max(3, {message: "Vous ne pouvez pas sélectionner plus de 3 rubriques"}),
    businessDescription: z.string().min(1, {message: "La description de l'entreprise ne peut pas être vide"}),
    website: z.string().min(1, {message: "Le site web ne peut pas être vide"})
    .refine(value => value.startsWith("http://") || value.startsWith("https://"), {message: "Le site web doit commencer par http:// ou https://"}),
});