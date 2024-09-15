import options from "@/app/options";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import Section from "@/components/section";
import RightSide from "./right-side";
import Image from "@/components/Image";
import allFurnitureImage from "/public/images/choose-furniture/all-furniture.png";

function ChooseFurnitureSection() {
    const { title, subtitle, showImage } = options.chooseFurnitureSection;
    return <Section header={title} footer={<ButtonWhatsApp />}>
        <h2 className="text-inherit leading-[40px] text-[32px] mb-[13px] font-bold text-left min-[480px]:text-center font-primary">{subtitle}</h2>
        <div className="flex flex-wrap lg:flex-nowrap">
            {showImage && <Image className="max-w-[480px] min-w-[50vw] mx-auto w-full" width={480} img={allFurnitureImage} alt="all-furniture" />}
            <RightSide />
        </div>
    </Section>;
}

export default ChooseFurnitureSection;