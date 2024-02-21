import options from "@/app/options";
import Section from "@/components/section";
import Testimonial from "./testimonial";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "@/components/slider";

function FaqSection() {
    const { title, subTitle, testimonials, imagesPath } = options.testimonialsSection;
    return <Section header={title}>
        <h3 className="text-inherit leading-[40px] text-[32px] mb-[13px] font-bold text-left min-[480px]:text-center font-primary">{subTitle}</h3>
        <h4 className="text-yellow-500 leading-[70px] text-[64px] text-center">&#9733;&#9733;&#9733;&#9733;&#9733;</h4>
        <Slider nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
            {testimonials.map((testimonial, idx) => <Testimonial
                key={idx}
                name={testimonial.name}
                text={testimonial.text}
                image={`${imagesPath}${testimonial.image}`}
            />)}
        </Slider>
    </Section>
}

export default FaqSection;