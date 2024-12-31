import {ReactNode} from "react";
import {ExhibitorRegistrationFormContextProvider} from "@/provider/exhibitorFormContextProvider";

export default function Layout({children}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <main className="container mx-auto px-4 my-12 space-y-8 min-h-[calc(100vh-70px)]">
            <ExhibitorRegistrationFormContextProvider>
                {children}
            </ExhibitorRegistrationFormContextProvider>
        </main>
    )
}