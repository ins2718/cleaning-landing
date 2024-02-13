import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
        apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,
    },
    url: {
        analytics: false,
    },
});

export default cld;