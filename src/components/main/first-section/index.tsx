import options from "@/app/options";
import LeftSide from "./left-side";
import RightSide from "./right-side";
import { CSSProperties } from "react";

function FirstSection() {
    const { topMargin, bottomMargin, showTitlePicture, showGallery } = options.firstSection;
    const styles = {
        "--FirstSection-topMargin": topMargin,
        "--FirstSection-bottomMargin": bottomMargin,
    };
    return <div style={styles as CSSProperties} id="first-section" className="relative mt-[--FirstSection-topMargin] mb-[--FirstSection-bottomMargin] min-h-[327px] sm:min-h-[357px] md:min-h-[479px] min-[1170px]:min-h-[570px] whitespace-pre-wrap">
        <div className="px-[15px] mx-auto my-0 max-w-[1260px]">
            <div className="flex">
                <LeftSide />
                {(!showTitlePicture && !showGallery) && <RightSide />}
            </div>
        </div>
    </div>;
}

export default FirstSection;