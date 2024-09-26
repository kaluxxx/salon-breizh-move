import {Session as NextAuthSession} from "next-auth";

export interface CustomSession extends NextAuthSession {
    role: string;
}