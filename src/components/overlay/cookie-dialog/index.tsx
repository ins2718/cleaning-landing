import { useAppSelector, useAppDispatch } from "@/hooks";
import Overlay from "../overlay";
import ButtonAccept from "@/components/buttons/button-accept";
import options from "@/app/options";
import { useState } from "react";
import { confirmCookie } from "@/reducers/header-reducer";
import dynamic from "next/dynamic";
const CookiePolicy = dynamic(() => import("./cookie-policy"), { ssr: false });
const PrivatePolicy = dynamic(() => import("./private-policy"), { ssr: false });

function CookieDialog() {
    const dispatch = useAppDispatch();
    const { isCookieConfirmed } = useAppSelector(state => state.header);
    const { title, text, urls } = options.cookieDialog;
    const [isCookiePolicyVisible, setIsCookiePolicyVisible] = useState(false);
    const [isPrivatePolicyVisible, setIsPrivatePolicyVisible] = useState(false);
    return <Overlay isVisible={!isCookieConfirmed}>
        <div className="shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_6px_6px] w-full md:w-auto max-w-full md:min-w-[526px] fixed h-auto max-h-[calc(100vh-20px)] px-[20px] py-[15px] md:right-[10px] bottom-[10px] border-0 rounded-[12px] bg-white">
            <h2 className="text-[15px] text-[#222] font-medium text-center">{title}</h2>
            <div className="min-w-[300px] w-full overflow-x-hidden overflow-y-auto max-h-[55vh] mt-[10px]">
                <div className="text-wrap text-[12px] leading-[1.5] text-[#222] mb-[5px] md:w-[calc(526px-42px)]">
                    {text}
                </div>
            </div>
            <div className="w-full text-center">
                <ButtonAccept onClick={() => dispatch(confirmCookie())} />
            </div>
            <div className="flex justify-center gap-[10px]">
                <button className="text-[#1e73be] text-[12px] m-0" onClick={() => setIsCookiePolicyVisible(true)}>{urls[0].text}</button>
                <button className="text-[#1e73be] text-[12px] m-0" onClick={() => setIsPrivatePolicyVisible(true)}>{urls[1].text}</button>
            </div>
        </div>
        {isCookiePolicyVisible && <CookiePolicy hide={() => setIsCookiePolicyVisible(false)} />}
        {isPrivatePolicyVisible && <PrivatePolicy hide={() => setIsPrivatePolicyVisible(false)} />}
    </Overlay>;
}

export default CookieDialog;