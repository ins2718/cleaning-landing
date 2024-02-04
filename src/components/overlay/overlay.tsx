import { PropsWithChildren } from "react";

type OverlayProps = PropsWithChildren & PropsWithOnClick & {
    isVisible: boolean;
}

function Overlay({ children, onClick, isVisible }: OverlayProps) {
    return <div
        onClick={(e) => e.target === e.currentTarget && onClick && onClick()}
        style={{ opacity: isVisible ? 1 : 0, visibility: isVisible ? "visible" : "hidden" }}
        className="fixed left-0 top-0 w-[100vw] h-[100vh] z-50 overflow-auto bg-[rgba(0,0,0,0.2)] duration-500 ease-linear transition-[opacity,visibility]"
    >
        {children}
    </div>;
}

export default Overlay;