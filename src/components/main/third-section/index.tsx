import ItemCard from "./item-card";
import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";

function ThirdSection() {
    return <div className="relative mb-0 py-[50px]">
        <img className="absolute left-0 top-[150px]" src="/images/l3.svg" alt="decor leaf" />
        <div className="px-[15px] max-w-[1260px] mx-auto my-0">
            <h2 className="mb-[27px] font-[museo] font-bold text-[40px] leading-[46px] text-center text-[#444b54] relative
            before:top-[-23px] before:left-0 before:right-0 before:my-0 before:mx-auto before:absolute before:content-[''] before:w-[96px] before:h-[2px] before:bg-[#ccc]">
                ¿Porque nosotros?
            </h2>
            <div className="flex mx-[-10px] flex-wrap justify-evenly">
                <ItemCard title="Tenemos PRECIOS FIJOS" imageUrl="/images/s3_2.png" text={`El precio anunciado por nuestros operadores no aumenta. Los maestros no le imponen nada "adicionalmente". El precio incluye todas las etapas necesarias de limpieza de alta calidad.`} />
                <ItemCard title="TRABAJAMOS PARA LAS PERSONAS" imageUrl="/images/s3_4.png" text={`No prometemos lo imposible. Sialgo no se puede limpiar lo comunicaremos por adelantado. Pero nuestros maestros no se irán hasta que hagan todo lo que está a su alcance.`} />
                <ItemCard title="CORRECTA ORGANIZACIÓN DEL TRABAJO" imageUrl="/images/s3_3.png" text={`Gracias a la moderna organización de nuestro equipo, respondemos rápidamente a todas las solicitudes, no nos olvidamos de nadie y estamos constantemente en contacto con nuestros clientes.`} />
            </div>
            <div className="mt-[40px] flex justify-center items-center">
                <ButtonOrder />
                <ButtonWhatsApp />
            </div>
        </div>
    </div>;
}

export default ThirdSection;