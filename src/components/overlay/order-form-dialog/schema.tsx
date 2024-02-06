import { isValidPhoneNumber } from "react-phone-number-input/max";
import { z } from "zod";

const schema = z.object({
    name: z.string().trim().optional(),
    phone: z.string().refine((phone) => {
        console.log(`checking ${phone}`)
        return isValidPhoneNumber(phone);
    }),
    agree: z.literal(true)
});

export default schema;