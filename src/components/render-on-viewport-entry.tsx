import useFirstViewportEntry from "@/app/hooks/useFirstViewportEntry";
import { useRef, Suspense } from "react";

function RenderOnViewportEntry({ className, children, ...wrapperDivProps }: any) {
    const ref = useRef<HTMLDivElement>();
    const entered = useFirstViewportEntry(ref, {});
    return <div {...wrapperDivProps} ref={ref} className={className}>
        {entered && <Suspense>{children}</Suspense>}
    </div>;
}

export default RenderOnViewportEntry;