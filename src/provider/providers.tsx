"use client";

import {ReactNode, useState} from "react";
import {SessionProvider as NextAuthSessionProvider} from "next-auth/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export default function Providers({children}: Readonly<{children: ReactNode;}>) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </QueryClientProvider>
    );
}