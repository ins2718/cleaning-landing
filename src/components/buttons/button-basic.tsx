import { ReactNode } from "react";

type ButtonProps = PropsWithOnClick & {
    content: ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
}

function ButtonBasic({ content, className = "", onClick, type, disabled }: ButtonProps) {
    return <button disabled={disabled} type={type} onClick={onClick} className={"w-[inherit] relative overflow-hidden text-[12px] leading-[20px] tracking-widest uppercase text-white cursor-pointer flex justify-center items-center p-[15px_28px_15px_26px] rounded-[42px] border border-solid mr-[21px] font-button " + className}>
        <em className="relative z-[2] flex items-center font-normal normal not-italic">{content}</em>
    </button>;
}

export default ButtonBasic;