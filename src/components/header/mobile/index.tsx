import MobileMenu from "./mobile-menu";
import HeaderLine from "../header-line";
import LeftItemsWrapper from "../left-items-wrapper";
import Logo from "../logo";
import RightItemsWrapper from "../right-items-wrapper";
import MenuButton from "./menu-button";
import WhatsApp from "../top-line/whats-app";

function MobileHeader() {
    return <div className="flex fixed bg-[--mobile-menu-bg] top-0 left-0 z-40 lg:hidden w-full px-[15px] h-[--header-height]">
        <HeaderLine
            leftItems={<LeftItemsWrapper items={<Logo />} />}
            centerItems={<LeftItemsWrapper items={<WhatsApp />} className="hidden sm:block" />}
            rightItems={<RightItemsWrapper items={<MenuButton />} />} />
        <MobileMenu />
    </div>;
}

export default MobileHeader;
