import options from "@/app/options";
import PhoneService from "./phone-service";

export default class WhatsAppService {
    static getLink = () => {
        const { phone, whatsAppPlaceholder } = options;
        const url = `https://wa.me/${new PhoneService(phone).getPhoneNumberWithoutPlus()}?text=${encodeURIComponent(whatsAppPlaceholder)}`;
        const params = new URLSearchParams(typeof window === "undefined" ? "localhost" : window.location.search);
        const fbclid = params.get("fbclid") ?? '';
        const utm: string[] = [];
        params.forEach((value, key) => key.substring(0, 3) === "utm" && utm.push(`${key}: ${value}`));
        return `//pro-chistka-mebeli.ru/landing-redirect.php?url=${encodeURIComponent(url)}&fbclid=${fbclid}&utm=${encodeURIComponent(utm.join(', '))}`;
    }
}