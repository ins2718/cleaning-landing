import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function PhoneField({ control, errorText }: any) {
    return <div className="mb-[24px]">
        <div className="mb-[36px]">
            <span className="relative">
                <Controller
                    name="phone"
                    control={control}
                    render={({ field: { onChange, value } }) => <PhoneInput
                        className={errorText ? "error" : ""}
                        placeholder="Número de telf"
                        defaultCountry="ES"
                        value={value}
                        onChange={onChange}
                    />}
                />
            </span>
            <p className="text-red-500">{errorText}</p>
        </div>
    </div>;
}

export default PhoneField;