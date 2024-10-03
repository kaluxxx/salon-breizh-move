"use server";

import { prisma } from "../../../prisma/lib/prisma";

import { ShowGuide } from "@prisma/client";

export async function getShowGuideById(id: string): Promise<ShowGuide[] | null> {
    const showGuide = await prisma.showGuide.findMany();
    console.log(showGuide);
    return showGuide;
}