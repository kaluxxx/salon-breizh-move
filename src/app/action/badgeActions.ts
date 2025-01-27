"use server";

import {BadgeRequestFormValues, BadgeRequestSchema} from "@/types/schema/badgeRequestSchema";
import {HTTPStatus} from "@/types/enums/HTTPStatus";
import {Response} from "@/types/payloads/Response";
import {prisma} from "../../../prisma/lib/prisma";
import eventEmitter from "@/lib/eventEmitter";
import {BadgeRequest} from "@prisma/client";

export const createBadgeRequest = async (badgeRequestFormValues: BadgeRequestFormValues): Promise<Response<BadgeRequest>> => {
    const parsedBadgeRequest = BadgeRequestSchema.safeParse(badgeRequestFormValues);

    if (!parsedBadgeRequest.success) {
        return {
            status: HTTPStatus.BAD_REQUEST,
            errors: parsedBadgeRequest.error.flatten().fieldErrors,
            message: "Les informations fournies sont incorrectes",
        };
    }

    try {
        const badgeRequestDto = parsedBadgeRequest.data;

        const badgeRequest = await prisma.badgeRequest.create({
            data: badgeRequestDto,
        });

        eventEmitter.emit("badgeRequest.created", badgeRequest);

        return {status: HTTPStatus.CREATED, message: "Demande de badge envoyée avec succès"};
    } catch (e) {
        console.error("Error creating badge request", e);
        return {
            status: HTTPStatus.INTERNAL_SERVER_ERROR,
            message: "Une erreur est survenue lors de l'enregistrement de votre demande de badge"
        };
    }
}