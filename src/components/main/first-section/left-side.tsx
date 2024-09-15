import options from "@/app/options";
import ButtonOrder from "@/components/buttons/button-order";
import Image from "@/components/Image";
import img from "/public/images/first/title-pickture.png";

function LeftSide() {
    const { title, showTitlePickture, showLogoTitle } = options.firstSection;
    return <div className="pr-0 min-[1170px]:pr-[117px] mx-auto my-0 text-center lg:text-left w-[830px] relative z-[4]">
        <h1 className="text-[30px] leading-[40px] w-auto sm:text-[40px] sm:leading-[50px] md:text-[50px] md:leading-[60px] lg:w-[716px] text-[#444b54] font-primary relative flex flex-col text-left min-[480px]:text-center">
            {showLogoTitle && <span className="relative w-max before:content-[''] before:absolute before:left-0 before:bottom-[5px] md:before:bottom-[14px] before:z-[-1] before:h-[9px] md:before:h-[22px] before:w-full before:bg-[#d1e8fa] mx-0 min-[480px]:mx-auto">limpiarmuebles.pro</span>}
            {title}
        </h1>
        {showTitlePickture && <Image img={img} alt=""></Image>}
        <p className="text-[16px] md:text-[24px] leading-[24px] md:leading-[47px] font-semibold text-left font-secondary">
            <strong className="">¿Tu alfombra necesita una limpieza profunda y eliminación de polvo y suciedad?</strong>
            <br />
            Con más de 15 años de experiencia, en limpiarmuebles.pro ofrecemos servicios profesionales de limpieza profunda de alfombras a domicilio.
            <br />Nos especializamos en la eliminación de manchas, polvo, suciedad, ácaros y alérgenos, garantizando una desinfección completa y un ambiente más saludable en tu hogar.
            <br />Utilizamos productos y equipos de limpieza de alta calidad para que tus alfombras queden como nuevas, libres de alérgenos y suciedad.
            <br />¡Confía en nosotros para un hogar más limpio y fresco!
        </p>
        <div className="flex mt-[60px] items-center justify-center">
            {/* <Button content="калькулятор стоимости" className="border-[#e23936] bg-[#e23936] hover:shadow-[0_10px_15px_rgba(226,57,54,0.22)]" /> */}
            <ButtonOrder />
        </div>
    </div>;
}

export default LeftSide;