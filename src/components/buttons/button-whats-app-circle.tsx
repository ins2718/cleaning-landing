import WhatsAppService from "@/services/whats-app-service";
import IconWhatsApp from "../icons/icon-whats-app";
import ym from "react-yandex-metrika";

function ButtonWhatsAppCircle() {
    return <div className="fixed top-[100px] sm:top-[unset] sm:bottom-10 right-10 z-50">
        <div className="absolute size-[60px] border-[3px] rounded-full border-[--whats-app-color] shadow-[0_0_20px_0_rgba(0,0,0,0.2)] animate-whatsAppButtonPulse"></div>
        <button onClick={() => {
            ym("reachGoal", "whatsapp");
            window.location.href = WhatsAppService.getLink();
        }} className="size-[60px] rounded-full flex items-center justify-center bg-[--whats-app-color] text-white animate-whatsAppButtonScale shadow-[0_0_20px_0_rgba(0,0,0,0.3)]">
            <IconWhatsApp width={35} height={32} />
        </button>
    </div>;
}

export default ButtonWhatsAppCircle;