
import { createHandler } from "@premieroctet/next-admin/appHandler";
import {prisma} from "../../../../../prisma/lib/prisma";
import schema from "../../../../../prisma/json-schema/json-schema.json";
import options from "../../../../../nextAdminOptions";

const { run } = createHandler({
  schema,
  apiBasePath: "/api/admin",
  prisma,
  options
});
 
export { run as DELETE, run as GET, run as POST };
