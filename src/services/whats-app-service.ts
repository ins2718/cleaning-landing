import options from "@/app/options";
import PhoneService from "./phone-service";

export default class WhatsAppService {
    static getLink = () => {
        const { phone, whatsAppPlaceholder } = options;
        const url = `https://wa.me/${new PhoneService(phone).getPhoneNumberWithoutPlus()}?text=${encodeURIComponent(whatsAppPlaceholder)}`;
        const params = new URLSearchParams(typeof window === "undefined" ? "localhost" : window.location.search);
        const fbclid = params.get("fbclid") ?? '';
        const match = typeof window === "undefined" ? null : document.cookie.match(new RegExp('(^| )_fbp=([^;]+)'));
        const fbp = match ? match[2] : '';
        const utm: string[] = [];
        params.forEach((value, key) => key.substring(0, 3) === "utm" && utm.push(`${key}: ${value}`));
        return `${process.env.NEXT_PUBLIC_HOST_API}/landing-redirect?url=${encodeURIComponent(url)}&fbclid=${fbclid}&fbp=${fbp}&utm=${encodeURIComponent(utm.join(', '))}`;
    }
}