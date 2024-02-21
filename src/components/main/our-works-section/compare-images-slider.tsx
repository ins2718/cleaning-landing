import options from "@/app/options";
import ComparedImages from "./compared-images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "@/components/slider";

function CompareImagesSlider() {
    const { compareImages } = options.ourWorksSection;
    return <Slider className="mt-[50px]" nextArrow={<NextArrow />} prevArrow={<PrevArrow />} swipe={false}>
        {compareImages.images.map((images, i) => {
            const path = `${compareImages.root}${images.path}`;
            return <ComparedImages
                key={i}
                className="h-[300px] min-[720px]:h-[543px]"
                firstImage={`${path}${images.before}`}
                secondImage={`${path}${images.after}`}
                firstAltText={images.before}
                secondAltText={images.after}
            />
        })}
    </Slider>;
}

export default CompareImagesSlider;