import HeaderLine from "../../header-line";
import LeftItemsWrapper from "../../left-items-wrapper";
import CloseButton from "../close-button";
import RightItemsWrapper from "../../right-items-wrapper";
import Logo from "../../logo";
import WorkingHours from "../../top-line/working-hours";
import WhatsApp from "../../top-line/whats-app";

export default function Headers() {
    return <>
        <div className="flex z-40 lg:hidden w-full px-[15px] h-[--header-height]">
            <HeaderLine
                leftItems={<LeftItemsWrapper items={<Logo />} />}
                rightItems={<RightItemsWrapper items={<CloseButton />} />}
            />
        </div>
        <HeaderLine
            rightItems={<RightItemsWrapper items={<WorkingHours />} />}
        />
        <HeaderLine
            rightItems={<RightItemsWrapper items={<WhatsApp />} />}
        />
    </>;
}