import { useAppDispatch, useAppSelector } from "@/hooks";
import ImageGallery from "react-image-gallery";
import Overlay from "../overlay";
import "react-image-gallery/styles/css/image-gallery.css";
import options from "@/app/options";
import { closeVideoGallery } from "@/reducers/header-reducer";
import IconCloseThick from "@/components/icons/icon-close-thick";
import { useRef } from "react";

function VideoGallery() {
    const dispatch = useAppDispatch();
    const { videoGalleryVideo } = useAppSelector(state => state.header);
    const hideForm = () => dispatch(closeVideoGallery());
    const { videos } = options;
    const galleryRef = useRef<ImageGallery>(null);
    if (videoGalleryVideo !== false) {
        galleryRef.current?.slideToIndex(videoGalleryVideo);
    }
    return <Overlay isVisible={videoGalleryVideo !== false} onClick={hideForm}>
        <div className="mx-auto my-0 h-[100vh] w-[100vw] p-[44px]">
            <IconCloseThick onClick={hideForm} className="size-[44px] absolute top-0 right-0 text-red-500 hover:text-red-700 cursor-pointer" />
            <ImageGallery
                lazyLoad={true}
                ref={galleryRef}
                items={videos}
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={false}
                renderItem={(item) => <iframe
                    className="size-full w-[calc(100vw-88px)] h-[calc(100vh-88px)]"
                    width="auto"
                    height="auto"
                    src={item.original}
                    title="limpiarmueble.pro"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
                </iframe>} />
        </div>
    </Overlay>;
}

export default VideoGallery;