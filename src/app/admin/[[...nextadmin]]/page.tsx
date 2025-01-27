import { NextAdmin, PageProps } from "@premieroctet/next-admin";
import { getNextAdminProps } from "@premieroctet/next-admin/appRouter";
import "../../../../nextAdminCss.css";
import {prisma} from "../../../../prisma/lib/prisma";
import schema from "../../../../prisma/json-schema/json-schema.json";
import options from "../../../../nextAdminOptions";

export default async function AdminPage({
  params,
  searchParams,
}: PageProps) {
  const props = await getNextAdminProps({
    schema,
    params: params.nextadmin,
    searchParams,
    basePath: "/admin",
    apiBasePath: "/api/admin",
    prisma,
    options
  });
 
  return <NextAdmin {...props} />;
}