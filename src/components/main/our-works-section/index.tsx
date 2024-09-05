import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import CompareImagesSlider from "./compare-images-slider";
import options from "@/app/options";
import Section from "@/components/section";
import Image from "@/components/Image";

function OurWorksSection() {
    const { title, subtitle } = options.ourWorksSection;
    return <Section
        decorators={<Image className="absolute right-0 bottom-[150px]" src="/images/our-works/page-decoration-leaf.svg" alt="page decoration leaf" />}
        header={title}
        subHeader={subtitle}
        footer={<>
            <ButtonOrder />
            <ButtonWhatsApp />
        </>}
    >
        <CompareImagesSlider />
    </Section>
}

export default OurWorksSection;