import {z} from "zod";

export const CartSchema = z.object({
    fees: z.number(),
    stand: z.string().min(1, "Veuillez sélectionner un types de stand"),
    variants: z.array(
        z.object({
            id: z.string().optional(),
            name: z.string().optional(),
            quantity: z.union([
                z.number(),
                z.string()
            ]).optional(),
            price: z.number().optional()
        }))
        .min(1, "Veuillez sélectionner au moins un stand")
        .refine(variants => variants.some(variant => variant.quantity),
            {message: "Veuillez sélectionner au moins un variant avec une quantité"}
        ),
    total: z.number()
});

export type CartFormValues = z.infer<typeof CartSchema>;
