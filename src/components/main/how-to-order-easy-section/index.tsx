import options from "@/app/options";
import ItemCard from "./item-card";
import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import Section from "@/components/section";

function WhyUsSection() {
    const { title, subtitle, root, cards } = options.howToOrderEasySection;
    return <Section
        header={title}
        subHeader={subtitle}
        footer={<>
            <ButtonOrder />
            <ButtonWhatsApp />
        </>}
        bodyWrapperClassName="flex mx-[-10px] flex-wrap justify-evenly"
    >
        {cards.map(({ title, text, image }, i) => <ItemCard key={i} title={title} text={text} imageUrl={`${root}${image}`} />)}
    </Section>;
}

export default WhyUsSection;