import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {isGranted} from "@/lib/authUtils";
import {getToken} from "next-auth/jwt";
import {Role} from "@prisma/client";

export type ProtectedRoutes = {
    [route: string]: Role[];
};

export const protectedRoutes: ProtectedRoutes = {
    // "/admin": [Role.ADMIN, Role.MODERATOR],
    // "/admin/*": [Role.ADMIN, Role.MODERATOR],
};

export default async function middleware(req: NextRequest) {
    const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
    const {pathname} = req.nextUrl;

    const headers = new Headers(req.headers);
    headers.set("x-pathname", pathname);

    if (token && pathname === "/signIn") {
        const absoluteURL = new URL("/", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString(), {headers});
    }

    for (const route in protectedRoutes) {
        const regex = new RegExp(`^${route.replace("*", ".*")}$`);
        if (!regex.test(pathname)) {
            continue;
        }
        const allowedRoles = protectedRoutes[route];
        if (!(await isGranted(req, allowedRoles))) {
            const absoluteURL = new URL("/login", req.nextUrl.origin);
            return NextResponse.redirect(absoluteURL.toString(), {headers});
        }
    }
    return NextResponse.next({request: {headers}});
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};