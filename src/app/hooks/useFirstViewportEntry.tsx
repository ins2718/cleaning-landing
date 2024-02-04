import { MutableRefObject, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function useFirstViewportEntry(ref: MutableRefObject<HTMLDivElement | undefined>, observerOptions: IntersectionObserverInit | undefined) {
    const [entered, setEntered] = useState(false);
    const observer = useRef(new IntersectionObserver(([entry]) => setEntered(entry.isIntersecting), observerOptions));

    useEffect(() => {
        const element = ref.current;
        const ob = observer.current;

        if (entered) {
            ob.disconnect();
            return;
        }

        if (element && !entered) {
            ob.observe(element);
        }

        return () => ob.disconnect();
    }, [entered, ref]);

    return entered;
}

export default useFirstViewportEntry;