import { useAppDispatch } from "@/hooks";
import { hideMobileMenu } from "@/reducers/header-reducer";
import IconCloseThick from "@/components/icons/icon-close-thick";

function CloseButton() {
    const dispatch = useAppDispatch();
    return <div
        onClick={() => dispatch(hideMobileMenu())}
        className="cursor-pointer">
        <IconCloseThick
            className="w-[calc(var(--header-height)/2)] h-[calc(var(--header-height)/2)]"
            color="blue"
        />
    </div>;
}

export default CloseButton;
