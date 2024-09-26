'use server'

import {prisma} from "../../../prisma/lib/prisma";

export async function getThematics() {
    return prisma.thematic.findMany();
}