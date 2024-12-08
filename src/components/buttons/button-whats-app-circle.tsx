import WhatsAppService from "@/services/whats-app-service";
import IconWhatsApp from "../icons/icon-whats-app";
import ym from "react-yandex-metrika";
import { CSSProperties } from "react";
import options from "@/app/options";


function ButtonWhatsAppCircle() {
    const { mobileTop, desktopBottom, right } = options.buttonWhatsAppCircle;
    const styles = {
        "--ButtonWhatsAppCircle-mobileTop": mobileTop,
        "--ButtonWhatsAppCircle-desktopBottom": desktopBottom,
        "--ButtonWhatsAppCircle-right": right,
    };
    return <div style={styles as CSSProperties} className="fixed top-[--ButtonWhatsAppCircle-mobileTop] sm:top-[unset] sm:bottom-[--ButtonWhatsAppCircle-desktopBottom] right-[--ButtonWhatsAppCircle-right] z-50">
        <div className="absolute size-[60px] border-[3px] rounded-full border-[--whats-app-color] shadow-[0_0_20px_0_rgba(0,0,0,0.2)] animate-whatsAppButtonPulse"></div>
        <button onClick={() => {
            ym("reachGoal", "whatsapp");
            window.location.href = WhatsAppService.getLink();
        }} className="size-[60px] rounded-full flex items-center justify-center bg-[--whats-app-color] text-white animate-whatsAppButtonScale shadow-[0_0_20px_0_rgba(0,0,0,0.3)] lead_Click_class">
            <IconWhatsApp width={35} height={32} />
        </button>
    </div>;
}

export default ButtonWhatsAppCircle;