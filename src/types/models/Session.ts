import {Session as NextAuthSession} from "next-auth";
import {JWT} from "next-auth/jwt";

export interface CustomSession extends NextAuthSession {
    role: string;
}

export interface CustomToken extends JWT {
    role: string;
}