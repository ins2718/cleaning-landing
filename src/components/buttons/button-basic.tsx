import { ReactNode } from "react";

type ButtonProps = {
    content: ReactNode;
    className?: string;
    onClick?: () => void;
}

function ButtonBasic({ content, className = "", onClick }: ButtonProps) {
    return <button onClick={onClick} className={"w-[inherit] relative overflow-hidden text-[12px] leading-[20px] tracking-widest uppercase text-white cursor-pointer flex justify-center items-center p-[15px_28px_15px_26px] rounded-[42px] border border-solid mr-[21px] font-['Proxima_Nova_Lt']" + className}>
        <em className="relative z-[2] flex items-center font-normal normal not-italic">{content}</em>
    </button>;
}

export default ButtonBasic;