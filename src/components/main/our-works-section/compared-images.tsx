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
    return <ReactCompareSlider className={className} onlyHandleDraggable={isTouchDevice}
        onPointerMove={(e) => { isTouchDevice && e.pointerType === "touch" && window.scrollBy({ top: e.movementY }); }}
        itemOne={<ReactCompareSliderImage src={firstImageSrc} srcSet={firstImageSrcSet} alt={firstAltText} />}
        itemTwo={<ReactCompareSliderImage src={secondImageSrc} srcSet={secondImageSrcSet} alt={secondAltText} />}
    />;
}

export default ComparedImages;