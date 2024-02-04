import Menu from "./menu";
import MobileHeader from "./mobile";
import TopLine from "./top-line";

function Header() {
    return <header className="px-[15px]">
        <Menu />
        <TopLine />
        <MobileHeader />
    </header>;
}

export default Header;