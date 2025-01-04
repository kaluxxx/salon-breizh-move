import NextAuth from "next-auth";
import {authOptions} from "@/lib/authOptions";

const authHandler = async (req: any, res: any) => {
    return await NextAuth(req, res, authOptions);
};

export const POST = authHandler;
export const GET = authHandler;