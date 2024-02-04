import { ReactNode } from "react";

type HeaderLineProps = {
    leftItems?: ReactNode;
    centerItems?: ReactNode;
    rightItems?: ReactNode;
}

function HeaderLine({ leftItems = <div />, centerItems, rightItems = <div /> }: HeaderLineProps) {
    return <div className="flex justify-between items-center w-full">
        {leftItems}
        {centerItems}
        {rightItems}
    </div>;
}

export default HeaderLine;
