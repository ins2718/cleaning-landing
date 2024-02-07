import Image from "next/image";

function Logo() {
    return <div className="">
        <a href="/" >
            <Image className="h-[--logo-size]" src="/images/logo.png" alt="Logo" />
        </a>
    </div>;
}

export default Logo;