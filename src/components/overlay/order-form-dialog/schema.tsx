import { isValidPhoneNumber } from "react-phone-number-input/max";
import { z } from "zod";

const schema = z.object({
    name: z.string().trim().optional(),
    phone: z.string().refine((phone) => {
        console.log(`checking ${phone}`)
        return isValidPhoneNumber(phone);
    }),
    zip: z.string().trim().length(5).regex(/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/).optional().or(z.literal("")),
    agree: z.literal(true)
});

export default schema;