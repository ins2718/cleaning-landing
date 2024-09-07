import options from "@/app/options";
import ButtonOrder from "@/components/buttons/button-order";

function LeftSide() {
    const { title } = options.firstSection;
    return <div className="pr-0 min-[1170px]:pr-[117px] mx-auto my-0 text-center lg:text-left w-[830px] relative z-[4]">
        <h1 className="text-[30px] leading-[40px] w-auto sm:text-[40px] sm:leading-[50px] md:text-[50px] md:leading-[60px] lg:w-[716px] text-[#444b54] font-primary relative flex flex-col text-left min-[480px]:text-center">
            <span className="relative w-max before:content-[''] before:absolute before:left-0 before:bottom-[5px] md:before:bottom-[14px] before:z-[-1] before:h-[9px] md:before:h-[22px] before:w-full before:bg-[#d1e8fa] mx-0 min-[480px]:mx-auto">limpiarmuebles.pro</span>
            {title}
        </h1>
        <p className="text-[16px] md:text-[24px] leading-[24px] md:leading-[47px] font-semibold text-left font-secondary">
            <strong className="">En limpiarmuebles.pro, ofrecemos servicios de limpieza a domicilio especializados en eliminar manchas de humo en muebles.</strong>
            <br />
            Utilizamos técnicas avanzadas para renovar tus muebles, colchones y alfombras, devolviéndoles su frescura original.<br />Nos encargamos de eliminar manchas y olores persistentes para que tus muebles luzcan como nuevos.
        </p>
        <div className="flex mt-[90px] items-center justify-center">
            {/* <Button content="калькулятор стоимости" className="border-[#e23936] bg-[#e23936] hover:shadow-[0_10px_15px_rgba(226,57,54,0.22)]" /> */}
            <ButtonOrder />
        </div>
    </div>;
}

export default LeftSide;