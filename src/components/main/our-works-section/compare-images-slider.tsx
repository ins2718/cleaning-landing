import options from "@/app/options";
import ComparedImages from "./compared-images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PropsWithChildren } from 'react'


type ArrowProps = PropsWithChildren & PropsWithOnClick & {
    className?: string;
}

function Arrow({ onClick, className = "", children }: ArrowProps) {
    return <button onClick={onClick} className={"before:bg-no-repeat before:bg-center before:flex before:duration-300 before:size-[75px] before:rounded-[50%] before:bg-white before:absolute before:left-0 before:top-0 absolute top-1/2 block -translate-y-1/2 cursor-pointer text-transparent border-none outline-none bg-transparent size-[75px] rounded-[50%] z-10 hover:before:bg-[#1B88D8] " + className}>{children}</button>;
}

function NextArrow({ onClick }: PropsWithOnClick) {
    return <Arrow className="before:bg-[url(/images/sl-r.svg)] right-[-37px]" onClick={onClick}>Next</Arrow>;
}

function PrevArrow({ onClick }: PropsWithOnClick) {
    return <Arrow className="before:bg-[url(/images/sl-l.svg)] left-[-37px]" onClick={onClick}>Previous</Arrow>;
}

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