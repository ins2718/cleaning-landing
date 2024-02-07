function RightSide() {
    return <div className="w-[calc(100%-830px)] relative h-[570px] hidden min-[1170px]:block">
        <div className="h-[522px] w-[calc(100%+117px)] bg-[#d1e8fa] z-[-1] absolute left-[-117px]" />
        <img className="absolute h-auto z-[2] right-[-20px] bottom-[-225px] w-[563px] max-w-7xl" src="/images/chair.png" alt="background chair" />
        <img className="absolute h-auto z-[1] right-0 top-[-98px] max-w-full" src="/images/tree-pot.png" alt="background tree pot" />
    </div>;
}

export default RightSide;