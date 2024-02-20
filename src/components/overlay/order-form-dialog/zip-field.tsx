import options from "@/app/options";
import CitiesService from "@/services/cities-service";

function ZipField({ register, errorText, disabled = false, value }: FormItemProps & { value: string }) {
    const extraClasses = errorText ? "border-red-500" : "border-[#bec1c5]";
    const { zipPlaceholder } = options.orderFormDialog;
    const city = CitiesService.getCityByZip(value);
    return <div className="mb-[24px]">
        <div className="mb-[36px]">
            <span className="relative flex">
                <input {...register("zip")} disabled={disabled} className={`border-b-[1px] text-[14px] leading-[20px] pb-[16px] text-black w-full placeholder:text-[#bec1c5] outline-none ${extraClasses}`} placeholder={zipPlaceholder} />
                <span>{city}</span>
            </span>
            <p className="text-red-500">{errorText}</p>
        </div>
    </div>;
}

export default ZipField;