import options from "@/app/options";
import IconClock from "../../icons/icon-clock";
import RightSideItemTemplate from "./icon-text-pair-template";

function WorkingHours() {
    const { workingHours, workingHoursText, logoHeight } = options;
    return <RightSideItemTemplate
        topText={workingHoursText}
        bottomText={workingHours}
        icon={<IconClock height={logoHeight} width={logoHeight} style={{ height: logoHeight, width: logoHeight }} />}
    />;
}

export default WorkingHours;