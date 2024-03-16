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
import ZipField from "./zip-field";
import CitiesService from "@/services/cities-service";
import { useState } from "react";
import dynamic from "next/dynamic";
import ym from "react-yandex-metrika";
const PrivatePolicy = dynamic(() => import("../cookie-dialog/private-policy"), { ssr: false });

function Form() {
    const dispatch = useAppDispatch();
    const hideForm = () => dispatch(hideOrderForm());
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch,
    } = useForm({
        resolver: zodResolver(schema),
    });
    const watchZip = watch("zip");
    const [sendForm, { isLoading, data: response, reset }] = useSendOrderFormMutation();
    const formSended = isLoading || response?.status === "ok";
    const updateData = (data: SendOrderForm): SendOrderForm => {
        const fbclid = (new URLSearchParams(window.location.search)).get("fbclid");
        if (fbclid) {
            data.fbclid = fbclid;
        }
        if (data.zip) {
            data.city = CitiesService.getCityByZip(data.zip).toLowerCase();
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
    const [isPrivatePolicyVisible, setIsPrivatePolicyVisible] = useState(false);
    return <form onSubmit={handleSubmit((data) => {
        ym("reachGoal", "sendForm");
        sendForm(updateData(data as SendOrderForm));
    })}>
        <div className="overflow-y-auto overflow-x-hidden top-[3vh] max-h-[94vh] bg-white shadow-[0px_15px_10px_rgba(0,0,0,0.03)] absolute left-0 right-0 mx-auto my-0 p-[46px_58px_48px_59px] max-w-[426px] w-full">
            <div onClick={hideForm} className="cursor-pointer absolute top-[32px] right-[24px] size-[20px] z-[3]
before:bg-[#91a5be] before:content-[''] before:rotate-45 before:left-0 before:h-[2px] before:mt-px before:bottom-1/2 before:w-full before:absolute before:hover:bg-black before:hover:duration-200 before:hover:transition-colors
after:bg-[#91a5be] after:content-[''] after:-rotate-45 after:left-0 after:h-[2px] after:mt-px after:bottom-1/2 after:w-full after:absolute after:hover:bg-black after:hover:duration-200 after:hover:transition-colors"/>
            <div className="mb-[24px]">
                <Title text={formSended ? sendedOrderTitle : title} />
                <SubTitle text={formSended ? sendedOrderSubTitle : subTitle} />
                <NameField disabled={formSended} register={register} errorText={errors.name?.message?.toString()} />
                <PhoneField disabled={formSended} control={control} errorText={errors.phone?.message?.toString()} />
                <ZipField disabled={formSended} register={register} errorText={errors.zip?.message?.toString()} value={watchZip} />
                <AgreeCheckbox disabled={formSended} register={register} errorText={errors.agree?.message?.toString()} showLicence={() => setIsPrivatePolicyVisible(true)} />
            </div>
            <SendButton onClick={onClick} text={formSended ? sendedOrderButtonText : buttonText} disabled={isLoading} />
            {isPrivatePolicyVisible && <PrivatePolicy hide={() => setIsPrivatePolicyVisible(false)} />}
        </div>
    </form>;
}

export default Form;