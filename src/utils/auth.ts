import {Role} from "@/types/role";
import {NextRequest} from "next/server";
import {getToken} from "next-auth/jwt";

export async function getNextAuthToken(req: NextRequest): Promise<any> {
    return await getToken({req, secret: process.env.NEXTAUTH_SECRET});
}

export async function isGranted(req: NextRequest, roles: Role[]): Promise<boolean> {
    const token = await getNextAuthToken(req);
    if (!token.role) return false;
    const tokenRole = Role[token.role.toUpperCase() as keyof typeof Role];
    return roles.includes(tokenRole);
}
