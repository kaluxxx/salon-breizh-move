"use server";

import { ContactFormValues, ContactSchema } from "@/types/schema/contactSchema";
import { prisma } from "../../../prisma/lib/prisma";
import { HTTPStatus } from "@/types/enums/HTTPStatus";
import { Response } from "@/types/payloads/Response";
import { Contact } from "@prisma/client";
import eventEmitter from "@/lib/eventEmitter";

export const createContact = async (contactFormValues: ContactFormValues): Promise<Response<Contact>> => {
    const parsedContact = ContactSchema.safeParse(contactFormValues);

    if (!parsedContact.success) {
        return {
            status: HTTPStatus.BAD_REQUEST,
            errors: parsedContact.error.flatten().fieldErrors ,
            message: "Les informations fournies sont incorrectes",
        };
    }

    try {
        const contactDto = parsedContact.data;

        const contact = await prisma.contact.create({
            data: contactDto,
        });

        eventEmitter.emit("contact.created", contact);

        return { status: HTTPStatus.CREATED, message: "Message de contact envoyé avec succès", data: contact };
    } catch (e) {
        console.error("Error creating contact", e);
        return { status: HTTPStatus.INTERNAL_SERVER_ERROR, message: "Une erreur est survenue lors de l'enregistrement de votre message" };
    }
};
