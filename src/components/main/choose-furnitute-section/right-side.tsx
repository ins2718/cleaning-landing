function RightSide() {
    return <div className="max-w-[480px] min-w-[50vw] mx-auto px-[10px] font-bold text-[24px] leading-[32px] min-[1024px]:text-[32px] min-[1024px]:leading-[40px] pt-[10px] min-[1024px]:pt-0 flex justify-center flex-col">
        <p className="whitespace-normal">
        Para solicitar una visita gratuita de un especialista,<br />
        que elabore el presupuesto,<br />
            <span className="text-blue-700">por favor envía un mensaje a WhatsApp</span><br />
            con la siguiente información:
        </p>
        <ol className="list-decimal list-inside">
            <li>Superficie del espacio (aproximadamente).</li>
            <li>¿Tienes un proyecto de diseño?</li>
            <li>Tu código postal.</li>
        </ol>
    </div>;
}


export default RightSide;