import options from "@/app/options";

function NameField({ register, errorText, disabled = false }: FormItemProps) {
    const extraClasses = errorText ? "border-red-500" : "border-[#bec1c5]";
    const { namePlaceholder } = options.orderFormDialog;
    return <div className="mb-[24px]">
        <div className="mb-[36px]">
            <span className="relative">
                <input {...register("name")} disabled={disabled} className={`border-b-[1px] text-[14px] leading-[20px] pb-[16px] text-black w-full placeholder:text-[#bec1c5] outline-none ${extraClasses}`} placeholder={namePlaceholder} />
            </span>
            <p className="text-red-500">{errorText}</p>
        </div>
    </div>;
}

export default NameField;