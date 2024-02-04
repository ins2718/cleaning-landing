import options from "@/app/options";
import Logo from "../header/logo";
import WhatsApp from "../header/top-line/whats-app";

function Footer() {
    const { menuItems } = options;
    return <div className="pb-[52px] pt-[45px] bg-[#f2f2f2]">
        <div className="px-[15px]">
            <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap">
                <Logo />
                <div className="pt-[5px]">
                    <div className="flex flex-wrap">
                        <ul className="flex flex-row justify-start flex-wrap items-center text-center">
                            {menuItems.map(({ title, href }, i) => <li key={i} className="mb-[22px] list-none w-1/2 sm:w-1/3">
                                <a href={href} className="relative font-[museo500] text-[15px] text-[#3c3d41] no-underline">{title}</a>
                            </li>)}
                        </ul>
                    </div>
                </div>
                <div className="pt-[2px]">
                    <div className="flex items-center">
                        <WhatsApp />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Footer;