function NameField({ register, errorText }: FormItemProps) {
    const extraClasses = errorText ? "border-red-500" : "border-[#bec1c5]";
    return <div className="mb-[24px]">
        <div className="mb-[36px]">
            <span className="relative">
                <input {...register("name")} className={`border-b-[1px] text-[14px] leading-[20px] pb-[16px] text-black w-full placeholder:text-[#bec1c5] outline-none ${extraClasses}`} placeholder="Nombre" />
            </span>
            <p className="text-red-500">{errorText}</p>
        </div>
    </div>;
}

export default NameField;