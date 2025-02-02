import EmailProvider from "next-auth/providers/email";
import {sendVerificationRequest} from "@/lib/emailService";
import {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "../../prisma/lib/prisma";
import {User} from "@prisma/client";
import {CustomSession} from "@/types/models/Session";

const providers = [
    EmailProvider({
        server: {
            host: process.env.EMAIL_SERVER,
            port: Number(process.env.EMAIL_PORT),
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        },
        from: process.env.EMAIL_FROM,
        sendVerificationRequest
    }),
];

export const authOptions: NextAuthOptions = {
    providers,
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        async signIn({ user }) {
            const userExists = await prisma.user.findFirst({
                where: { email: user.email! },
            });
            if (!userExists) {
                return "/unauthorized";
            }
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as User).role;
            }
            return token;
        },
        async session({ session, token }) {
            (session as CustomSession).role = token.role as string;
            return session;
        },
        async redirect({ url, baseUrl }) {
            if (url === "/unauthorized" || url === "/signIn") {
                return "/";
            }
            return baseUrl;
        }
    },
};
