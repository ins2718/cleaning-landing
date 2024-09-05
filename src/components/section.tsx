import { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren & {
    header?: ReactNode;
    subHeader?: ReactNode;
    footer?: ReactNode;
    decorators?: ReactNode;
    bodyWrapperClassName?: string;
};


function Section({ header, subHeader, footer, decorators, bodyWrapperClassName = "", children }: SectionProps) {
    return <div className="relative mb-0 py-[50px] overflow-x-hidden">
        {decorators}
        <div className="px-[15px] max-w-[1260px] mx-auto my-0">
            <h2 style={{marginBottom: subHeader ? "7px" : "27px"}} className="font-primary text-[40px] leading-[46px] text-left min-[480px]:text-center text-[#444b54] relative
            before:top-[-23px] before:left-0 before:right-0 before:my-0 before:mx-auto before:absolute before:content-[''] before:w-[96px] before:h-[2px] before:bg-[#ccc]">
                {header}
            </h2>
            {subHeader && <h2 className="font-bold text-[16px] text-left text-black font-secondary">
                {subHeader}
            </h2>}
            <div className={`font-secondary ${bodyWrapperClassName}`}>
                {children}
            </div>
            {footer && <div className="mt-[40px] flex justify-center items-center">
                {footer}
            </div>}
        </div>
    </div>;
}

export default Section;