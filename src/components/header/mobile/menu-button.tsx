import { useAppDispatch, useAppSelector } from "@/hooks";
import { showMobileMenu } from "@/reducers/header-reducer";
import IconHamburgerMenu from "@/components/icons/icon-hamburger-menu";

function MenuButton() {
    const dispatch = useAppDispatch();
    const { isMobileMenuVisible } = useAppSelector(state => state.header);
    return <div
        style={{ display: isMobileMenuVisible ? "none" : "block", }}
        onClick={() => dispatch(showMobileMenu())}
        className="cursor-pointer">
        <IconHamburgerMenu
            className="h-[calc(var(--header-height)/2)] w-[calc(var(--header-height)/2)]"
            color="blue"
        />
    </div>;
}

export default MenuButton;
