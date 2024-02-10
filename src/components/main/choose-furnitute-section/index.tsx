import options from "@/app/options";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";

function ChooseFurnitureSection() {
    const { title } = options.chooseFurnitureSection;
    return <div className="relative mb-0 py-[50px] overflow-x-hidden">
        <div className="px-[15px] max-w-[1260px] mx-auto my-0">
            <h2 className="mb-[27px] font-[museo] font-bold text-[40px] leading-[46px] text-center text-[#444b54] relative
            before:top-[-23px] before:left-0 before:right-0 before:my-0 before:mx-auto before:absolute before:content-[''] before:w-[96px] before:h-[2px] before:bg-[#ccc]">
                {title}
            </h2>
            <div>
                <img src="/images/choose-furniture/all-furniture.png" alt="all-furniture" />
            </div>
            <div className="mt-[40px] flex justify-center items-center">
                <ButtonWhatsApp />
            </div>
        </div>
    </div>;
}

export default ChooseFurnitureSection;