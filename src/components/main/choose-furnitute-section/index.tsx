import options from "@/app/options";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import Section from "@/components/section";

function ChooseFurnitureSection() {
    const { title } = options.chooseFurnitureSection;
    return <Section header={title} footer={<ButtonWhatsApp />}>
        <img src="/images/choose-furniture/all-furniture.png" alt="all-furniture" />
    </Section>;
}

export default ChooseFurnitureSection;