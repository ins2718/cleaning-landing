import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleOrderFormAgreement } from "@/reducers/header-reducer";

type CheckBoxProps = {
    checked: boolean;
};

function CheckBox({ checked }: CheckBoxProps) {
    if (checked) {
        return <span className="bg-[#1b88d8] rounded-[6px] border-[1px] border-[#1b88d8] absolute size-[20px] left-0 top-0 bg-[url(/images/icon_agree_check.svg)] bg-center bg-no-repeat"></span>
    }
    return <span className="bg-white rounded-[6px] border-[1px] border-[#bec1c5] absolute size-[20px] left-0 top-0"></span>;
}

function AgreeCheckbox() {
    const dispatch = useAppDispatch();
    const { isOrderFormAgreed } = useAppSelector(state => state.header);
    return <div className="mt-[-10px]">
        <span className="relative">
            <CheckBox checked={isOrderFormAgreed} />
        </span>
        <span onClick={() => dispatch(toggleOrderFormAgreement())} className="cursor-pointer inline-block text-[14px] leading-[1.7] text-black pl-[33px] pr-[45px] relative align-top">
            Даю согласие на обработку &nbsp;
            <a className="text-black underline" href="#">персональных данных</a>
        </span>
    </div>;
}

export default AgreeCheckbox;