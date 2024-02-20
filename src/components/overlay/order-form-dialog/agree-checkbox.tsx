import IconCheck from "@/components/icons/icon-check";
import { useAppDispatch } from "@/hooks";
import { toggleOrderFormAgreement } from "@/reducers/header-reducer";

function AgreeCheckbox({ register, errorText, disabled = false }: FormItemProps) {
    const dispatch = useAppDispatch();
    return <div className="mt-[-10px]">
        <label onClick={() => dispatch(toggleOrderFormAgreement())} className="cursor-pointer inline-block text-[14px] leading-[1.7] text-black pl-[33px] pr-[45px] relative align-top">
            <span className="relative -left-[30px]">
                <input type="checkbox" disabled={disabled} {...register("agree")} className="peer size-[20px] opacity-0 left-0 top-0 absolute z-10 cursor-pointer" />
                <span className="bg-transparent peer-checked:bg-[#1b88d8] rounded-[6px] border-[1px] border-[#bec1c5] peer-checked:border-[#1b88d8] absolute size-[20px] left-0 top-0 flex items-center justify-center text-white">
                    <IconCheck />
                </span>
            </span>
            Даю согласие на обработку &nbsp;
            <a className="text-black underline" href="#">персональных данных</a>
        </label>
        <p className="text-red-500">{errorText}</p>
    </div>;
}

export default AgreeCheckbox;