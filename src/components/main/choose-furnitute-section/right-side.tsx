function RightSide() {
    return <div className="max-w-[480px] min-w-[50vw] mx-auto px-[10px] font-bold text-[24px] leading-[32px] min-[1024px]:text-[32px] min-[1024px]:leading-[40px] pt-[10px] min-[1024px]:pt-0 flex justify-center flex-col">
        <p className="whitespace-normal">
        Para calcular el costo de la<br />
            limpieza de tu alfombra,<br />
            <span className="text-blue-700">envía un mensaje a WhatsApp</span><br />
            con el siguiente texto:
        </p>
        <ol className="list-decimal list-inside">
            <li>Las dimensiones de la alfombra, y si es posible, una foto de tu alfombra.<br />
                (Si necesitas limpiar algo más que la alfombra,
                indícalo en el mensaje)</li>
            <li>Tu código postal</li>

        </ol>
    </div>;
}


export default RightSide;