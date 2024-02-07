import options from "@/app/options";
import ItemCard from "./item-card";
import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";

function WhatWeCleanSection() {
    const { title, root, cards } = options.whatWeCleanSection;
    return <div className="mb-0 py-[50px] relative">
        <img className="absolute right-0 bottom-[50px] max-h-[400px] hidden min-[968px]:block" src="/images/what-we-clean/sofa_background.jpg" alt="sofá background" />
        <div className="relative px-[15px]">
            <h2 className="mb-[27px] font-[museo] font-bold text-[40px] leading-[46px] text-center text-[#444b54] relative
            before:top-[-23px] before:left-0 before:right-0 before:my-0 before:mx-auto before:absolute before:content-[''] before:w-[96px] before:h-[2px] before:bg-[#ccc]">
                {title}
            </h2>
            <div className="mb-[-20px] flex mx-[-5px] mt-[40px] flex-wrap justify-center">
                {cards.map(({ image, title }, i) => <ItemCard key={i} title={title} imageUrl={`${root}${image}`} />)}
            </div>
            <div className="mt-[40px] flex justify-center items-center">
                <ButtonOrder />
                <ButtonWhatsApp />
            </div>
        </div>
    </div>;
}

export default WhatWeCleanSection;