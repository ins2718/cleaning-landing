import { useAppSelector } from "@/hooks";
import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
const VideoGallery = dynamic(() => import("."), { ssr: false });

function LazyVideoGallery() {
    const [initialized, setInitialized] = useState<null | true>(null);
    const { videoGalleryVideo } = useAppSelector(state => state.header);
    if (videoGalleryVideo && !initialized) {
        setInitialized(true);
    }
    return initialized && <Suspense>
        <VideoGallery />
    </Suspense>
}

export default LazyVideoGallery;