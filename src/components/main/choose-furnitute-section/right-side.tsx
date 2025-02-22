function RightSide() {
    return <div className="max-w-[480px] min-w-[50vw] mx-auto px-[10px] font-bold text-[24px] leading-[32px] min-[1024px]:text-[32px] min-[1024px]:leading-[40px] pt-[10px] min-[1024px]:pt-0 flex justify-center flex-col">
        <p className="whitespace-normal">
        Чтобы получить предварительную смету,<br />
            <span className="text-blue-700"> пожалуйста отправьте сообщение в WhatsApp,</span><br />
         со следующей информацией:
        </p>
        <ol className="list-decimal list-inside">
            <li>✅ Площадь помещения (даже примерную).</li>
            <li>✅ Тип помещения (квартира, дом, коммерческое помещение).</li>
            <li>✅ Тип ремонта (капитальный, косметический).</li>
            <li>✅ Почтовый индекс.</li>
            <li>✅ Планируемый срок начала ремонта</li>
            
        </ol>
    </div>;
}


export default RightSide;