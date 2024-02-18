import options from "@/app/options";

function SubTitle() {
    const { subTitle } = options.orderFormDialog;
    return <div className="mb-[24px] text-[16px] text-black text-left leading-[1.85]">{subTitle}</div>;
}

export default SubTitle;