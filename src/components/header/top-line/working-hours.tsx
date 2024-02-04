import IconClock from "../../icons/icon-clock";
import RightSideItemTemplate from "./icon-text-pair-template";

function WorkingHours() {
    return <RightSideItemTemplate
        topText="Horario de trabajo"
        bottomText="Lun-Dom: 10.00 -22.00"
        icon={<IconClock className="h-[--logo-size] w-[--logo-size]" />}
    />;
}

export default WorkingHours;