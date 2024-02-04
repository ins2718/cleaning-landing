import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

type ComparedImagesProps = {
    className?: string;
    firstImage: string;
    secondImage: string;
    firstAltText?: string;
    secondAltText?: string;
};

function ComparedImages({ className = "", firstImage, secondImage, firstAltText = "", secondAltText = "" }: ComparedImagesProps) {
    return <ReactCompareSlider className={className}
        itemOne={<ReactCompareSliderImage src={firstImage} alt={firstAltText} />}
        itemTwo={<ReactCompareSliderImage src={secondImage} alt={secondAltText} />}
    />;
}

export default ComparedImages;