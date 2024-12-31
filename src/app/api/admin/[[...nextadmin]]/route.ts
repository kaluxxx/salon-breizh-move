import {createHandler} from "@premieroctet/next-admin/appHandler";
import schema from "../../../../../prisma/json-schema/json-schema.json";
import {prisma} from "../../../../../prisma/lib/prisma";
import {options} from "@/lib/nextAdmin/options";
import {isGranted} from "@/lib/authUtils";
import {Role} from "@/types/models/role";
import {NextResponse} from "next/server";

const { run } = createHandler({
    apiBasePath: "/api/admin",
    prisma,
    schema,
    options,
    onRequest: async (req) => {
        if (!(await isGranted(req, [Role.ADMIN, Role.MODERATOR]))) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
    }
});

export { run as DELETE, run as GET, run as POST };