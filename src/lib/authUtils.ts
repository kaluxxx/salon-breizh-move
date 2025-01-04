import {NextRequest} from "next/server";
import {getToken, JWT} from "next-auth/jwt";
import {CustomToken} from "@/types/models/Session";
import {Role} from "@prisma/client";

export async function getNextAuthToken(req: NextRequest): Promise<JWT | null> {
    return await getToken({req, secret: process.env.NEXTAUTH_SECRET});
}

export async function isGranted(req: NextRequest, roles: Role[]): Promise<boolean> {
    const token = await getNextAuthToken(req) as CustomToken;
    if (!token.role) return false;
    const tokenRole = Role[token.role.toUpperCase() as keyof typeof Role];
    return roles.includes(tokenRole);
}
