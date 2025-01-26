"use server";

import {Response} from "@/types/payloads/Response";
import {QuoteRequest} from "@prisma/client";
import {QuoteRequestFormValues, QuoteRequestSchema} from "@/types/schema/quoteRequestSchema";
import {prisma} from "../../../prisma/lib/prisma";
import eventEmitter from "@/lib/eventEmitter";
import {HTTPStatus} from "@/types/enums/HTTPStatus";

export const createQuoteRequest = async (quoteRequestFormValues: QuoteRequestFormValues): Promise<Response<QuoteRequest>> => {
    const parsedQuoteRequest = QuoteRequestSchema.safeParse(quoteRequestFormValues);

    if (!parsedQuoteRequest.success) {
        return {
            status: HTTPStatus.BAD_REQUEST,
            errors: parsedQuoteRequest.error.flatten().fieldErrors,
            message: "Les informations fournies sont incorrectes",
        };
    }

    try {
        const quoteRequestDto = parsedQuoteRequest.data;

        const quoteRequest = await prisma.quoteRequest.create({
            data: quoteRequestDto,
        });

        eventEmitter.emit("quoteRequest.created", quoteRequest);

        return {status: HTTPStatus.CREATED, message: "Demande de devis envoyée avec succès"};
    } catch (e) {
        console.error("Error creating quote request", e);
        return {
            status: HTTPStatus.INTERNAL_SERVER_ERROR,
            message: "Une erreur est survenue lors de l'enregistrement de votre demande de devis"
        };
    }

}