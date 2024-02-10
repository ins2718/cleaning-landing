import { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren & {
    header?: ReactNode;
    footer?: ReactNode;
    decorators?: ReactNode;
    bodyWrapperClassName?: string;
    id?: string;
};


function Section({ header, footer, decorators, bodyWrapperClassName = "", id, children }: SectionProps) {
    return <div className="relative mb-0 py-[50px] overflow-x-hidden" id={id}>
        {decorators}
        <div className="px-[15px] max-w-[1260px] mx-auto my-0">
            <h2 className="mb-[27px] font-[museo] font-bold text-[40px] leading-[46px] text-center text-[#444b54] relative
            before:top-[-23px] before:left-0 before:right-0 before:my-0 before:mx-auto before:absolute before:content-[''] before:w-[96px] before:h-[2px] before:bg-[#ccc]">
                {header}
            </h2>
            <div className={bodyWrapperClassName}>
                {children}
            </div>
            {footer && <div className="mt-[40px] flex justify-center items-center">
                {footer}
            </div>}
        </div>
    </div>;
}

export default Section;