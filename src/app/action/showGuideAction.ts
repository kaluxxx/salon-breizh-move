"use server";

import { prisma } from "../../../prisma/lib/prisma";

import { ShowGuide } from "@prisma/client";

export async function getShowGuideById(id: string): Promise<ShowGuide | null> {
    return prisma.showGuide.findUnique({
        where: {
            id: id
        }
    });
}