import options from "@/app/options";
import ItemCard from "./item-card";
import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import Image from "next/image";

function WhyUsSection() {
    const { title, root, cards } = options.whyUsSection;
    return <div className="relative mb-0 py-[50px]">
        <Image className="absolute left-0 top-[150px]" src="/images/l3.svg" alt="decor leaf" />
        <div className="px-[15px] max-w-[1260px] mx-auto my-0">
            <h2 className="mb-[27px] font-[museo] font-bold text-[40px] leading-[46px] text-center text-[#444b54] relative
            before:top-[-23px] before:left-0 before:right-0 before:my-0 before:mx-auto before:absolute before:content-[''] before:w-[96px] before:h-[2px] before:bg-[#ccc]">
                {title}
            </h2>
            <div className="flex mx-[-10px] flex-wrap justify-evenly">
                {cards.map(({ title, text, image }, i) => <ItemCard key={i} title={title} text={text} imageUrl={`${root}${image}`} />)}
            </div>
            <div className="mt-[40px] flex justify-center items-center">
                <ButtonOrder />
                <ButtonWhatsApp />
            </div>
        </div>
    </div>;
}

export default WhyUsSection;