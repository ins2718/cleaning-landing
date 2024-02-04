import { hideOrderForm } from "@/reducers/header-reducer";
import { useAppDispatch, useAppSelector } from "@/hooks";
import SendButton from "./send-button";
import Title from "./title";
import SubTitle from "./sub-title";
import NameField from "./name-field";
import PhoneField from "./phone-field";
import AgreeCheckbox from "./agree-checkbox";
import Overlay from "../overlay";

function OrderDialog() {
    const dispatch = useAppDispatch();
    const hideForm = () => dispatch(hideOrderForm());
    const { isOrderFormVisible } = useAppSelector(state => state.header);
    return <Overlay onClick={hideForm} isVisible={isOrderFormVisible}>
        <div className="overflow-y-auto top-[3vh] max-h-[94vh] bg-white shadow-[0px_15px_10px_rgba(0,0,0,0.03)] absolute left-0 right-0 mx-auto my-0 p-[46px_58px_48px_59px] max-w-[426px] w-full">
            <div onClick={hideForm} className="cursor-pointer absolute top-[32px] right-[24px] size-[20px] z-[3]
    before:bg-[#91a5be] before:content-[''] before:rotate-45 before:left-0 before:h-[2px] before:mt-px before:bottom-1/2 before:w-full before:absolute before:hover:bg-black before:hover:duration-200 before:hover:transition-colors
    after:bg-[#91a5be] after:content-[''] after:-rotate-45 after:left-0 after:h-[2px] after:mt-px after:bottom-1/2 after:w-full after:absolute after:hover:bg-black after:hover:duration-200 after:hover:transition-colors"/>
            <div className="mb-[24px]">
                <Title />
                <SubTitle />
                <NameField />
                <PhoneField />
                <AgreeCheckbox />
            </div>
            <SendButton />
        </div>
    </Overlay>;
}

export default OrderDialog;