import options from "@/app/options";
import PhoneService from "./phone-service";

export default class WhatsAppService {
    static getLink = () => {
        const { phone, whatsAppPlaceholder } = options;
        const url = `https://wa.me/${new PhoneService(phone).getPhoneNumberWithoutPlus()}?text=${encodeURIComponent(whatsAppPlaceholder)}`;
        const fbclid = typeof window === "undefined" ? "" : ((new URLSearchParams(window.location.search)).get("fbclid") ?? "");
        return `//pro-chistka-mebeli.ru/landing-redirect.php?url=${encodeURIComponent(url)}&fbclid=${fbclid}`;
    }
}