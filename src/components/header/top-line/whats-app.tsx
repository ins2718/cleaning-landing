import RightSideItemTemplate from "./icon-text-pair-template";
import PhoneService from "@/services/phone-service";
import options from "@/app/options";
import IconWhatsApp from "@/components/icons/icon-whats-app";
import WhatsAppService from "@/services/whats-app-service";

function WhatsApp() {
    const { logoHeight, whatsAppText, phone } = options;
    const phoneNumber = new PhoneService(phone);
    return <a
        className="text-green-500"
        href={WhatsAppService.getLink()}>
        <RightSideItemTemplate
            topText={whatsAppText}
            bottomText={phoneNumber.getPrettyPhoneNumber()}
            icon={<IconWhatsApp height={logoHeight} width={logoHeight} style={{ height: logoHeight, width: logoHeight }} />}
        />
    </a>;
}

export default WhatsApp;