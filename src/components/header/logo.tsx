import options from "@/app/options";
import Image from "../Image";
import logo from "/public/images/logo.png";

function Logo() {
    const { logoHeight } = options;
    return <div>
        <a href="/" >
            <Image height={logoHeight} img={logo} alt="Logo" style={{ height: logoHeight }} />
        </a>
    </div>;
}

export default Logo;