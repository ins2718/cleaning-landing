import options from "@/app/options";
import { Resize } from "@cloudinary/url-gen/actions/resize";
import { StaticImageData } from "next/image";
import cld from "@/services/cloudinary";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    img?: StaticImageData;
    dpr?: number[] | number;
}

function Image({ img, alt, src, width, height, dpr = [1, 2, 3], ...props }: ImageProps) {
    if (!img && !src) {
        throw "Your must set img or src prop!";
    }
    if (!Array.isArray(dpr)) {
        dpr = [dpr];
    }
    const { cloudImages } = options;
    let srcSet;
    const originalSrc = (img ? img.src : src) as string;
    if (cloudImages || process.env.NODE_ENV === "production") {
        let imgName = process.env.NEXT_PUBLIC_CLOUDINARY_PATH + (img ? originalSrc.substring(originalSrc.lastIndexOf("/") + 1) : originalSrc.substring(8));
        let cldImg = cld.image(imgName).quality("auto");
        if (width || height) {
            if (width && height) {
                cldImg.resize(Resize.scale(width, height));
            } else if (width) {
                cldImg.resize(Resize.scale().width(width));
                if (img) {
                    height = Math.round(+width / img.width / img.height);
                }
            } else if (height) {
                cldImg.resize(Resize.scale().height(height));
                if (img) {
                    width = Math.round(+height * img.width / img.height);
                }
            }
        } else if (img) {
            width = img!.width;
            height = img!.height;
        }
        const url = cldImg.addTransformation("dpr_1").toURL();
        srcSet = dpr.map(dpr => url.replace("dpr_1", `dpr_${dpr}`) + ` ${dpr}x`).join(",");
    }
    return <img src={originalSrc} srcSet={srcSet} width={width} height={height} alt={alt} {...props} />;
}

export default Image;