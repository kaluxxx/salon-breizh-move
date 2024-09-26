import {ReactNode} from "react";
import Steps from "@/app/register/exhibitor/steps";
import Cart from "@/components/cart";

export default async function SharedLayout({children}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <section className="relative flex flex-col items-center justify-center gap-4 maw-w-2xl lg:max-w-5xl mx-auto">
            <Steps/>
            <div className="flex flex-col md:flex-row w-full gap-4">
                {children}
                <div className="w-full md:w-1/3">
                    <Cart/>
                </div>
            </div>
        </section>
    )
}