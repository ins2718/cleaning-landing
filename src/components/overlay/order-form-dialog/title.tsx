import options from "@/app/options";

function Title() {
    const { title } = options.orderFormDialog;
    return <div className="mb-[7px] font-primary text-[24px] font-bold leading-[1.95] text-[#3c3d41]">{title}</div>;
}

export default Title;