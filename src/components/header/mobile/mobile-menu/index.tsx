import { useAppSelector } from "@/hooks";
import Menu from "./menu";
import Headers from "./headers";

function MobileMenu() {
    const { isMobileMenuVisible } = useAppSelector(state => state.header);
    return <div
        style={{ right: isMobileMenuVisible ? "0" : "-100%", }}
        className="w-[100vw] h-[100vh] fixed top-0 z-50 bg-[--mobile-menu-bg] duration-500 transition-[right]"
    >
        <Headers />
        <Menu />
    </div>;
}

export default MobileMenu;
