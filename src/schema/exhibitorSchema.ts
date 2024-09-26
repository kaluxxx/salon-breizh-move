import {z} from "zod";
import {AddressSchema} from "@/schema/addressSchema";
import {PersonSchema, PersonSchemaWithoutEmailAndPhone} from "@/schema/personSchema";
import {ShowGuideSchema} from "@/schema/showGuideSchema";
import {Exhibitor} from "@/types/exhibitor";

export const ExhibitorSchema = z.object({
    companyName: z.string().min(1, {message: "Le nom de l'entreprise ne peut pas être vide"}),
    address: AddressSchema,
    isSameBillingAddress: z.string({message: "Veuillez indiquer si l'adresse de facturation est la même que l'adresse de l'entreprise"}),
    billingAddress: AddressSchema,
    siret: z.string().min(1, {message: "Le numéro de SIRET ne peut pas être vide"})
        .length(14, {message: "Le numéro de SIRET doit contenir 14 caractères"}),
    tvaNumber: z.string()
        .min(1, {message: "Le numéro de TVA ne peut pas être vide"})
        .length(13, {message: "Le numéro de TVA doit contenir 13 caractères"})
        .regex(/^[A-Z]{2}\d{11}$/, {message: "Le numéro de TVA doit commencer par 2 lettres majuscules suivies de 11 chiffres"}),
    apeCode: z.string()
        .min(1, {message: "Le code APE ne peut pas être vide"})
        .length(5, {message: "Le code APE doit contenir 5 caractères"})
        .regex(/^\d{4}[A-Z]$/, {message: "Le code APE doit contenir 4 chiffres suivis d'une lettre majuscule"}),
    companyManager: PersonSchemaWithoutEmailAndPhone,
    standManager: PersonSchema,
    onSiteContact: PersonSchema,
    showGuide: ShowGuideSchema,
    hasSpecialRequest: z.string({message: "Veuillez indiquer si vous avez des demandes spéciales"})
        .min(1, {message: "Veuillez indiquer si vous avez des demandes spéciales"}),
    closeTo: z.string().optional(),
    awayFrom: z.string().optional(),
    comments: z.string().optional(),
    hasCoExhibitors: z.string({message: "Veuillez indiquer si vous avez des co-exposants"})
        .min(1, {message: "Veuillez indiquer si vous avez des co-exposants"}),
    coExhibitors: z.array(
        z.object({
            companyName: z.string()
                .min(1, {message: "Le nom de l'entreprise ne peut pas être vide"}),
        })
    ).max(3, {message: "Vous ne pouvez pas ajouter plus de 3 co-exposants"})
        .optional(),
}).superRefine(({hasCoExhibitors, coExhibitors}, refinementContext) => {
    if (hasCoExhibitors === "yes" && coExhibitors?.length === 0) {
        return refinementContext.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Veuillez renseigner les noms de vos co-exposants",
            path: ["coExhibitors"]
        });
    }
});

export type ExhibitorFormValues = z.infer<typeof ExhibitorSchema>;

const getDefaultAddress = (address?: Exhibitor["address"]) => ({
    address: address?.address ?? "",
    additionalAddress: address?.additionalAddress ?? "",
    postalCode: address?.postalCode ?? "",
    city: address?.city ?? "",
    email: address?.email ?? "",
    phone: address?.phone ?? "",
});

const getDefaultPerson = (person?: Exhibitor["companyManager"]) => ({
    civility: person?.civility ?? "",
    firstName: person?.firstName ?? "",
    lastName: person?.lastName ?? "",
    email: person?.email ?? "",
    phone: person?.phone ?? "",
});

const getDefaultShowGuide = (showGuide?: Exhibitor["showGuide"]) => ({
    companyName: showGuide?.companyName ?? "",
    address: getDefaultAddress(showGuide?.address),
    thematics: showGuide?.thematics ?? [],
    businessDescription: showGuide?.businessDescription ?? "",
    website: showGuide?.website ?? "",
});

export const getExhibitorDefaultValues = (exhibitor?: Exhibitor) => ({
    companyName: exhibitor?.companyName ?? "",
    address: getDefaultAddress(exhibitor?.address),
    isSameBillingAddress: "false",
    billingAddress: getDefaultAddress(exhibitor?.billingAddress),
    siret: exhibitor?.siret ?? "",
    tvaNumber: exhibitor?.tvaNumber ?? "",
    apeCode: exhibitor?.apeCode ?? "",
    companyManager: getDefaultPerson(exhibitor?.companyManager),
    standManager: getDefaultPerson(exhibitor?.standManager),
    onSiteContact: getDefaultPerson(exhibitor?.onSiteContact),
    showGuide: getDefaultShowGuide(exhibitor?.showGuide),
    hasSpecialRequest: exhibitor?.hasSpecialRequest ?? "",
    closeTo: exhibitor?.closeTo ?? "",
    awayFrom: exhibitor?.awayFrom ?? "",
    comments: exhibitor?.comments ?? "",
    hasCoExhibitors: exhibitor?.hasCoExhibitors ?? "",
    coExhibitors: exhibitor?.coExhibitors ?? [],
});