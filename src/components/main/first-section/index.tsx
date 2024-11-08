import options from "@/app/options";
import LeftSide from "./left-side";
import RightSide from "./right-side";

function FirstSection() {
    const { showTitlePicture } = options.firstSection;
    return <div id="first-section" className="relative mt-[80px] mb-[60px] min-h-[327px] sm:min-h-[357px] md:min-h-[479px] min-[1170px]:min-h-[570px]">
        <div className="px-[15px] mx-auto my-0 max-w-[1260px]">
            <div className="flex">
                <LeftSide />
                {!showTitlePicture && <RightSide />}
            </div>
        </div>
    </div>;
}

export default FirstSection;