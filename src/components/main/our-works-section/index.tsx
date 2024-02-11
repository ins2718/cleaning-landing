import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import CompareImagesSlider from "./compare-images-slider";
import options from "@/app/options";
import Section from "@/components/section";

function OurWorksSection() {
    const { title } = options.ourWorksSection;
    return <Section
        decorators={<img className="absolute right-0 bottom-[150px]" src="/images/l4.svg" alt="decor leaf 4" />}
        header={title}
        footer={<>
            <ButtonOrder />
            <ButtonWhatsApp />
        </>}
    >
        <CompareImagesSlider />
    </Section>
}

export default OurWorksSection;