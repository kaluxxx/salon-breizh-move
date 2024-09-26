import {z} from "zod";

export const ThematicSchema = z.object({
    id: z.string(),
    name: z.string(),
});