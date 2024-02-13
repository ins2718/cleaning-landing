import options from "@/app/options";
import { Resize } from "@cloudinary/url-gen/actions/resize";
import { StaticImageData } from "next/image";
import cld from "@/services/cloudinary";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    img: StaticImageData;
}

function Image({ img, alt, src, width, height, ...props }: ImageProps) {
    const { cloudImages } = options;
    let srcSet;
    if (cloudImages || process.env.NODE_ENV === "production") {
        const imgName = "cleaning-landing/" + img.src.substring(img.src.lastIndexOf("/") + 1);
        let cldImg = cld.image(imgName).quality("auto");
        if (width || height) {
            if (width && height) {
                cldImg.resize(Resize.scale(width, height));
            } else if (width) {
                cldImg.resize(Resize.scale().width(width));
                height = Math.round(+width / img.width / img.height);
            } else if (height) {
                cldImg.resize(Resize.scale().height(height));
                width = Math.round(+height * img.width / img.height);
            }
        } else {
            width = img.width;
            height = img.height;
        }
        const url = cldImg.addTransformation("dpr_1").toURL();
        srcSet = [url + " 1x", url.replace("dpr_1", "dpr_2") + " 2x", url.replace("dpr_1", "dpr_3") + " 3x"].join(",");
    }
    return <img src={img.src} srcSet={srcSet} width={width} height={height} alt={alt} {...props} />;
}

export default Image;