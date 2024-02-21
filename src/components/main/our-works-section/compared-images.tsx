import { calcImageProps } from "@/components/Image";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

type ComparedImagesProps = {
    className?: string;
    firstImage: string;
    secondImage: string;
    firstAltText?: string;
    secondAltText?: string;
};

function ComparedImages({ className = "", firstImage, secondImage, firstAltText = "", secondAltText = "" }: ComparedImagesProps) {
    const { originalSrc: firstImageSrc, srcSet: firstImageSrcSet } = calcImageProps({ src: firstImage });
    const { originalSrc: secondImageSrc, srcSet: secondImageSrcSet } = calcImageProps({ src: secondImage });
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const onPointerMove = ({ movementY, pointerType }: React.PointerEvent<HTMLDivElement>) => {
        if (isTouchDevice && pointerType === "touch" && Math.abs(movementY) > 2) {
            window.scrollBy({ top: 20 * movementY, behavior: "smooth" });
        }
    };
    return <ReactCompareSlider className={className} onlyHandleDraggable={isTouchDevice}
        onPointerMove={onPointerMove}
        itemOne={<ReactCompareSliderImage src={firstImageSrc} srcSet={firstImageSrcSet} alt={firstAltText} />}
        itemTwo={<ReactCompareSliderImage src={secondImageSrc} srcSet={secondImageSrcSet} alt={secondAltText} />}
    />;
}

export default ComparedImages;