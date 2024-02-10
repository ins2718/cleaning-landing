import options from "@/app/options";
import ItemCard from "./item-card";
import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import Section from "@/components/section";

function WhyUsSection() {
    const { title, root, cards } = options.whyUsSection;
    return <Section
        decorators={<img className="absolute left-0 top-[150px]" src="/images/l3.svg" alt="decor leaf" />}
        header={title}
        footer={<>
            <ButtonOrder />
            <ButtonWhatsApp /></>}
        bodyWrapperClassName="flex mx-[-10px] flex-wrap justify-evenly"
    >
        {cards.map(({ title, text, image }, i) => <ItemCard key={i} title={title} text={text} imageUrl={`${root}${image}`} />)}
    </Section>
}

export default WhyUsSection;