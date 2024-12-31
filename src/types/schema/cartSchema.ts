import {z} from "zod";
import {Cart} from "@/types/models/cart";

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

export const getCartDefaultValues = (cart?: Cart) => ({
    fees: cart?.fees ?? 0,
    stand: cart?.stand ?? "",
    variants: cart?.variants.map(variant => ({
        id: variant.id ?? "",
        name: variant.name ?? "",
        quantity: variant.quantity ?? 0,
        price: variant.price ?? 0
    })) ?? [],
    total: cart?.total ?? 0
});