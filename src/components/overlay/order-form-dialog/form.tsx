import { hideOrderForm } from "@/reducers/header-reducer";
import { useAppDispatch } from "@/hooks";
import SendButton from "./send-button";
import Title from "./title";
import SubTitle from "./sub-title";
import NameField from "./name-field";
import PhoneField from "./phone-field";
import AgreeCheckbox from "./agree-checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import schema from "./schema";
import { useSendOrderFormMutation } from "@/app/api/order-form";
import options from "@/app/options";

function Form() {
    const dispatch = useAppDispatch();
    const hideForm = () => dispatch(hideOrderForm());
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });
    const [sendForm, { isLoading, data: response, reset }] = useSendOrderFormMutation();
    const formSended = isLoading || response?.status === "ok";
    const updateData = (data: SendOrderForm): SendOrderForm => {
        const fbclid = (new URLSearchParams(window.location.search)).get("fbclid");
        if (fbclid) {
            data.fbclid = fbclid;
        }
        return data;
    };
    const { sendedOrderButtonText, buttonText, title, sendedOrderTitle, subTitle, sendedOrderSubTitle } = options.orderFormDialog;
    const onClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (formSended) {
            event.preventDefault();
            reset();
        }
    };
    return <form onSubmit={handleSubmit((data) => sendForm(updateData(data as SendOrderForm)))}>
        <div className="overflow-y-auto top-[3vh] max-h-[94vh] bg-white shadow-[0px_15px_10px_rgba(0,0,0,0.03)] absolute left-0 right-0 mx-auto my-0 p-[46px_58px_48px_59px] max-w-[426px] w-full">
            <div onClick={hideForm} className="cursor-pointer absolute top-[32px] right-[24px] size-[20px] z-[3]
before:bg-[#91a5be] before:content-[''] before:rotate-45 before:left-0 before:h-[2px] before:mt-px before:bottom-1/2 before:w-full before:absolute before:hover:bg-black before:hover:duration-200 before:hover:transition-colors
after:bg-[#91a5be] after:content-[''] after:-rotate-45 after:left-0 after:h-[2px] after:mt-px after:bottom-1/2 after:w-full after:absolute after:hover:bg-black after:hover:duration-200 after:hover:transition-colors"/>
            <div className="mb-[24px]">
                <Title text={formSended ? sendedOrderTitle : title} />
                <SubTitle text={formSended ? sendedOrderSubTitle : subTitle} />
                <NameField disabled={formSended} register={register} errorText={errors.name?.message?.toString()} />
                <PhoneField disabled={formSended} control={control} errorText={errors.phone?.message?.toString()} />
                <AgreeCheckbox disabled={formSended} register={register} errorText={errors.agree?.message?.toString()} />
            </div>
            <SendButton onClick={onClick} text={formSended ? sendedOrderButtonText : buttonText} disabled={isLoading} />
        </div>
    </form>;
}

export default Form;