import {z} from "zod"

export const UserInput = z.object({
    email: z.string(),
    password: z.string()
})

export type UserInputType = z.infer<typeof UserInput>


// //everything above is exaclty like below
// //then why all those. we use "zod" thats why!
// export type UserInputType = {
//     email: string;
//     password: string
// }