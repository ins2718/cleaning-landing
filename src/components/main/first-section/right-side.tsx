import Image from "@/components/Image";
import chairImage from "/public/images/first/chair.png";
import treeImage from "/public/images/first/tree-pot.png";

function RightSide() {
    return <div className="w-[calc(100%-830px)] relative h-[570px] hidden visible min-[1170px]:block">
        <div className="h-[522px] w-[calc(100%+117px)] bg-[#d1e8fa] z-[-1] absolute left-[-117px]" />
        <Image img={chairImage} width={563} className="absolute h-auto z-[2] right-[-20px] bottom-[-225px] w-[563px] max-w-7xl" alt="background chair" />
        <Image img={treeImage} className="absolute h-auto z-[1] right-0 top-[-98px] max-w-full" alt="background tree pot" loading="lazy" />
    </div>;
}

export default RightSide;