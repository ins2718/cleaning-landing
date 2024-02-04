import LeftSide from "./left-side";
import RightSide from "./right-side";

function FirstSection() {
    return <div className="relative mt-[130px] mb-[170px]">
        <div className="px-[15px] mx-auto my-0 max-w-[1260px]">
            <div className="flex">
                <LeftSide />
                <RightSide />
            </div>
        </div>
    </div>;
}

export default FirstSection;