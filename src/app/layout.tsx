import "./globals.css";
import {ReactNode} from "react";
import type {Metadata} from "next";
import {getServerSession} from "next-auth";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import {Toaster} from "@/components/ui/toaster";
import Providers from "@/provider/providers";

import "@/events/contactEvents"

import {ABeeZee} from 'next/font/google'
import {authOptions} from "@/lib/authOptions";

const roboto = ABeeZee({
    weight: '400',
    subsets: ['latin'],
})


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: ReactNode;
}>) {
    const session = await getServerSession(authOptions);
    return (
        <html lang="fr">
        <body
            className={`${roboto.className} antialiased bg-white text-foreground flex flex-col`}
        >
        <Providers>
            <NavigationBar session={session}/>
            <main className="min-h-[calc(100vh-70px)] flex flex-col justify-start">
                {children}
            </main>
            <Footer/>
            <Toaster/>
        </Providers>
        </body>
        </html>
    );
}
