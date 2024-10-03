"use server";

import { prisma } from "../../../prisma/lib/prisma";
import { ExhibitorSchema } from "@/schema/exhibitorSchema"; // Typage à partir de votre schema
import { CartSchema } from "@/schema/cartSchema";
import { Civility } from "@prisma/client";
import {Exhibitor} from "@/types/exhibitor";
import {Cart} from "@/types/cart";

const FEE_PER_EXHIBITOR = 250;

export async function preRegister({ exhibitor, cart }: {
    exhibitor: Exhibitor,
    cart: Cart
}): Promise<{ message: string }> {
    const validationResult = validateData(exhibitor, cart);
    if (validationResult) {
        return validationResult;
    }

    // Parsing des données via Zod
    const parsedExhibitor = ExhibitorSchema.safeParse(exhibitor);
    const parsedCart = CartSchema.safeParse(cart);

    if (!parsedExhibitor.success || !parsedCart.success) {
        return { message: "Les informations fournies sont incorrectes" };
    }

    try {
        await createExhibitor(parsedExhibitor.data, parsedCart.data);
    } catch (e) {
        return { message: `Une erreur est survenue lors de l'inscription de l'exposant : ${e}` };
    }

    return { message: "Votre inscription a bien été enregistrée" };
}

function validateData(exhibitor: any, cart: any) {
    if (!exhibitor || !cart) {
        return { message: "Les informations fournies sont incorrectes" };
    }
    return null;
}

async function createExhibitor(exhibitorData: any, cartData: any) {
    await prisma.exhibitor.create({
        data: {
            companyName: exhibitorData.companyName,
            address: createAddressData(exhibitorData.address),
            billingAddress: createAddressData(exhibitorData.billingAddress),
            siret: exhibitorData.siret,
            apeCode: exhibitorData.apeCode,
            tvaNumber: exhibitorData.tvaNumber,
            companyManager: createPersonData(exhibitorData.companyManager),
            standManager: createPersonData(exhibitorData.standManager),
            onSiteContact: createPersonData(exhibitorData.onSiteContact),
            showGuide: createShowGuideData(exhibitorData.showGuide),
            closeTo: exhibitorData.closeTo,
            awayFrom: exhibitorData.awayFrom,
            comments: exhibitorData.comments,
            coExhibitors: createCoExhibitorsData(exhibitorData.coExhibitors),
            cart: createCartData(cartData, exhibitorData.coExhibitors),
        }
    });
}

function createAddressData(address: any) {
    return {
        create: {
            address: address.address,
            additionalAddress: address.additionalAddress,
            postalCode: address.postalCode,
            city: address.city,
            email: address.email,
            phone: address.phone,
        }
    };
}

function createPersonData(person: any) {
    return {
        create: {
            civility: person.civility as Civility,
            firstName: person.firstName,
            lastName: person.lastName,
            email: person.email,
            phone: person.phone,
        }
    };
}

function createShowGuideData(showGuide: any) {
    return {
        create: {
            companyName: showGuide.companyName,
            address: createAddressData(showGuide.address),
            thematics: {
                connect: showGuide.thematics.map((thematic: any) => ({ id: thematic }))
            },
            businessDescription: showGuide.businessDescription,
            website: showGuide.website,
        }
    };
}

function createCoExhibitorsData(coExhibitors: any) {
    return {
        create: coExhibitors?.map((coExhibitor: any) => ({
            companyName: coExhibitor.companyName,
        }))
    };
}

function createCartData(cartData: any, coExhibitors: any) {
    const filteredVariants = cartData.variants.filter((variant: any) =>
        variant.id !== undefined && !isNaN(variant.quantity) && variant.price !== undefined
    );
    const totalFees = FEE_PER_EXHIBITOR * (1 + (coExhibitors?.length ?? 0));
    const total = filteredVariants.reduce((acc: number, variant: any) => acc + Number(variant.price) * Number(variant.quantity), 0) + totalFees;

    return {
        create: {
            fees: totalFees,
            cartItems: {
                create: filteredVariants.map((variant: any) => ({
                    standVariant: {
                        connect: {
                            id: variant.id,
                        }
                    },
                    quantity: Number(variant.quantity),
                    price: variant.price,
                }))
            },
            total,
        }
    };
}

