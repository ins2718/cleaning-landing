function RightSide() {
    return <div className="max-w-[480px] min-w-[50vw] mx-auto px-[10px] font-bold text-[24px] leading-[32px] min-[1024px]:text-[32px] min-[1024px]:leading-[40px] pt-[10px] min-[1024px]:pt-0 flex justify-center flex-col">
        <p className="whitespace-normal">
            Para calcular el costo de la<br />
            limpieza de tus sillas,<br />
            <span className="text-blue-700">envía un mensaje a WhatsApp</span><br />
            con el siguiente texto:
        </p>
        <ol className="list-decimal list-inside">
            <li>Cantidad de sillas, y si es posible, una foto de tus sillas. (Si necesitas limpiar algo más además de las sillas, indícalo en el mensaje.)</li>
            <li>Tu código postal</li>
        </ol>
    </div>;
}


export default RightSide;