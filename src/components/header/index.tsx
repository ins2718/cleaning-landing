import Menu from "./menu";
import MobileHeader from "./mobile";
import TopLine from "./top-line";
import Counters from "./counters";

function Header() {
    return <header className="px-[15px]">
        <Menu />
        <TopLine />
        <MobileHeader />
        <Counters />
    </header>;
}

export default Header;