import options from "@/app/options";
import Section from "@/components/section";
import Testimonial from "./testimonial";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "@/components/slider";

function TestimonialsSection() {
    const { title, subTitle, testimonials, imagesPath } = options.testimonialsSection;
    return <Section header={title}>
        <p className="text-[16px] md:text-[24px] leading-[24px] md:leading-[47px] font-semibold text-left font-secondary mb-[13px] min-[480px]:text-center">{subTitle}</p>
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

export default TestimonialsSection;