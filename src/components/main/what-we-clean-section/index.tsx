import ItemCard from "./item-card";
import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";

function WhatWeCleanSection() {
    return <div className="mb-0 py-[50px] relative">
        <img className="absolute right-0 bottom-[50px] max-h-[400px] hidden min-[968px]:block" src="/images/bg_services_new_2.jpg" alt="sofá background" />
        <div className="relative px-[15px]">
            <h2 className="mb-[27px] font-[museo] font-bold text-[40px] leading-[46px] text-center text-[#444b54] relative
            before:top-[-23px] before:left-0 before:right-0 before:my-0 before:mx-auto before:absolute before:content-[''] before:w-[96px] before:h-[2px] before:bg-[#ccc]">
                ¿QUÉ LIMPIAMOS?
            </h2>
            <div className="mb-[-20px] flex mx-[-5px] mt-[40px] flex-wrap justify-center">
                <ItemCard title="Sofá: desde 60 €" imageUrl="/images/s2_1.jpg" />
                <ItemCard title="Sillas: desde 8€" imageUrl="/images/s2_5-150x123.jpg" />
                <ItemCard title="Colchón: desde 25€" imageUrl="/images/s2_3-150x82.jpg" />
                <ItemCard title="Alfombra: desde 8€/m²" imageUrl="/images/s2_4-150x86.jpg" />
            </div>
            <div className="mt-[40px] flex justify-center items-center">
                <ButtonOrder />
                <ButtonWhatsApp />
            </div>
        </div>
    </div>;
}

export default WhatWeCleanSection;