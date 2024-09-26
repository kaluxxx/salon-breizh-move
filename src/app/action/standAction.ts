"use server"

import {prisma} from "../../../prisma/lib/prisma";

export async function getStands() {
    return prisma.stand.findMany({
        include: {
            variants: true,
        },
    });
}