export default class PhoneService {
    phone: string;
    m: any = null;

    constructor(phone: string) {
        this.phone = phone.replace(/\D/g, "");
    }

    getPrettyPhoneNumber = () => {
        if (!this.m) {
            this.m = this.phone.match(/(\d{2})(\d{3})(\d{2})(\d{2})(\d{2})/);
        }
        return this.m ? `+${this.m[1]} ${this.m[2]} ${this.m[3]} ${this.m[4]} ${this.m[5]}` : this.getPhoneNumberWithPlus();
    }

    getPhoneNumberWithoutPlus = () => this.phone;

    getPhoneNumberWithPlus = () => `+${this.phone}`;
}