import options from "@/app/options";
import { Resize } from "@cloudinary/url-gen/actions/resize";
import { StaticImageData } from "next/image";
import cld from "@/services/cloudinary";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    img?: StaticImageData;
    dpr?: number[] | number;
}

type ImageSize = {
    width?: number;
    height?: number;
}

const { cloudImages } = options;

function calcImageOptimizedSrc(src: string, { width, height }: ImageSize = {}) {
    if (!cloudImages) {
        return src;
    }
    let cldImg = cld.image(process.env.NEXT_PUBLIC_CLOUDINARY_PATH + src.substring(8)).quality("auto");
    if (width || height) {
        cldImg.resize(Resize.scale(width, height));
    }
    return cldImg.toURL();
}

function calcImageProps({ img, src, width, height, dpr = [1, 2, 3] }: ImageProps) {
    if (!img && !src) {
        throw "Your must set img or src prop!";
    }
    if (!Array.isArray(dpr)) {
        dpr = [dpr];
    }
    let srcSet;
    const originalSrc = (img ? img.src : src) as string;
    if (cloudImages) {
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
    return { originalSrc, width, height, srcSet };
}

function Image({ img, alt, src, width, height, dpr = [1, 2, 3], ...props }: ImageProps) {
    const { originalSrc, srcSet, width: newWidth, height: newHeight } = calcImageProps({ img, src, width, height, dpr });
    return <img src={originalSrc} srcSet={srcSet} width={newWidth} height={newHeight} alt={alt} {...props} />;
}

export default Image;
export { calcImageProps, calcImageOptimizedSrc };