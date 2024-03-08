import { YMInitializer } from "react-yandex-metrika";
import Menu from "./menu";
import MobileHeader from "./mobile";
import TopLine from "./top-line";

function Header() {
    return <header className="px-[15px]">
        <Menu />
        <TopLine />
        <MobileHeader />
        <YMInitializer accounts={[94032685]} version="2" />
    </header>;
}

export default Header;