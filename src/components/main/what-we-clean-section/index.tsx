import options from "@/app/options";
import ItemCard from "./item-card";
import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import Section from "@/components/section";
import sofaImage from "/public/images/what-we-clean/sofa_background.jpg";
import Image from "@/components/Image";

function WhatWeCleanSection() {
    const { title, root, cards } = options.whatWeCleanSection;
    return <Section
        decorators={<Image img={sofaImage} className="absolute right-0 bottom-[50px] max-h-[400px] hidden min-[968px]:block" alt="sofá background" />}
        header={title}
        footer={<>
            <ButtonOrder />
            <ButtonWhatsApp />
        </>}
        bodyWrapperClassName="mb-[-20px] flex mx-[-5px] mt-[40px] flex-wrap justify-center"
    >
        {cards.map(({ image, title }, i) => <ItemCard key={i} title={title} imageUrl={`${root}${image}`} />)}
    </Section>;
}

export default WhatWeCleanSection;