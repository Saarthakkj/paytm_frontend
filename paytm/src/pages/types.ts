import { z, ZodType } from "zod"; // Add new import

type Myform = {
    name : string ;
    email : string ;
    password : string ;
}
export const UserSchema: ZodType<Myform> = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
});

