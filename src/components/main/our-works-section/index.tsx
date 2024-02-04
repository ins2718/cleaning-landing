import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import CompareImagesSlider from "./compare-images-slider";

function OurWorksSection() {
    return <div className="relative mb-0 py-[50px] overflow-x-hidden">
        <img className="absolute right-0 bottom-[150px]" src="/images/l4.svg" alt="decor leaf 4" />
        <div className="px-[15px] max-w-[1260px] mx-auto my-0">
            <h2 className="mb-[27px] font-[museo] font-bold text-[40px] leading-[46px] text-center text-[#444b54] relative
            before:top-[-23px] before:left-0 before:right-0 before:my-0 before:mx-auto before:absolute before:content-[''] before:w-[96px] before:h-[2px] before:bg-[#ccc]">
                Aquí tenemos ejemplos de nuestro trabajo
            </h2>
            <CompareImagesSlider />
            <div className="mt-[40px] flex justify-center items-center">
                <ButtonOrder />
                <ButtonWhatsApp />
            </div>
        </div>
    </div>;
}

export default OurWorksSection;