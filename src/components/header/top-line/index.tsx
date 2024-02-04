import HeaderLine from "../header-line";
import LeftItemsWrapper from "../left-items-wrapper";
import Logo from "../logo";
import RightItemsWrapper from "../right-items-wrapper";
import WhatsApp from "./whats-app";
import WorkingHours from "./working-hours";

function TopLine() {
    return <div className="mt-[20px] hidden lg:flex">
        <HeaderLine
            leftItems={<LeftItemsWrapper items={<Logo />} />}
            rightItems={<RightItemsWrapper items={[<WhatsApp key={0} />, <WorkingHours key={1} />]} className="flex-1 justify-evenly" />}
        />
    </div>;
}

export default TopLine;