import options from "@/app/options";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import Section from "@/components/section";
import RightSide from "./right-side";

function ChooseFurnitureSection() {
    const { title, subtitle } = options.chooseFurnitureSection;
    return <Section header={title} footer={<ButtonWhatsApp />}>
        <h2 className="text-inherit leading-[40px] text-[32px] mb-[13px] font-bold text-left min-[480px]:text-center">{subtitle}</h2>
        <div className="flex flex-wrap lg:flex-nowrap">
            <img className="max-w-[480px] mx-auto w-full" src="/images/choose-furniture/all-furniture.png" alt="all-furniture" />
            <div className="max-w-[480px] mx-auto px-[10px] font-bold text-[32px] leading-[40px] flex justify-center flex-col">
                <RightSide />
            </div>
        </div>
    </Section>;
}

export default ChooseFurnitureSection;