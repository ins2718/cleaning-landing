import options from "@/app/options";
import PhoneService from "./phone-service";

export default class WhatsAppService {
    static getLink = () => {
        const { phone, whatsAppPlaceholder } = options;
        return `https://wa.me/${new PhoneService(phone).getPhoneNumberWithoutPlus()}?text=${encodeURIComponent(whatsAppPlaceholder)}`;
    }
}