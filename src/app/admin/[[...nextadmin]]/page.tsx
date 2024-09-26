import {NextAdmin, PageProps} from "@premieroctet/next-admin";
import {getNextAdminProps} from "@premieroctet/next-admin/appRouter";
import schema from "../../../../prisma/json-schema/json-schema.json";
import {nextAdminTranslations} from "../../../../translation/translation";
import prisma from "../../../../prisma/lib/prisma";
import {options} from "@/nextAdmin/options";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function AdminPage({
                                            params,
                                            searchParams,
                                        }: PageProps) {
    const props = await getNextAdminProps({
        params: params.nextadmin,
        searchParams,
        basePath: "/admin",
        apiBasePath: "/api/admin",
        prisma,
        schema,
        options,
    });

    const session = await getServerSession(authOptions);
    return <NextAdmin
        {...props}
        user={{
            data: {
                name: session?.user?.email!,
            },
            logout: "/api/auth/signout",
        }}
        translations={nextAdminTranslations}
    />;
}