import WhatsAppService from "@/services/whats-app-service";
import ButtonBasic from "./button-basic";

function ButtonWhatsApp() {
    return <ButtonBasic onClick={() => window.location.href = WhatsAppService.getLink()} content="WhatsApp" className="border-[#1bd888] bg-[#1bd888] hover:shadow-[0_10px_15px_rgba(27,216,136,0.22)]" />;
}

export default ButtonWhatsApp;