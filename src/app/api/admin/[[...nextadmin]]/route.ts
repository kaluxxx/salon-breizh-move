import {createHandler} from "@premieroctet/next-admin/appHandler";
import schema from "../../../../../prisma/json-schema/json-schema.json";
import {prisma} from "../../../../../prisma/lib/prisma";
import {options} from "@/lib/nextAdmin/options";

const { run } = createHandler({
    apiBasePath: "/api/admin",
    prisma,
    schema,
    options,
});

export { run as DELETE, run as GET, run as POST };