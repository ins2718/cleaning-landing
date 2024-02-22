import { useAppDispatch, useAppSelector } from "@/hooks";
import ImageGallery from "react-image-gallery";
import Overlay from "../overlay";
import "react-image-gallery/styles/css/image-gallery.css";
import options from "@/app/options";
import { closeVideoGallery, openVideoGallery } from "@/reducers/header-reducer";
import IconCloseThick from "@/components/icons/icon-close-thick";
import { useRef } from "react";
import YoutubeVideoFrame from "./youtube-video-frame";

function VideoGallery() {
    const dispatch = useAppDispatch();
    const { videoGalleryVideo } = useAppSelector(state => state.header);
    const hideForm = () => dispatch(closeVideoGallery());
    const { videos } = options.videoSection;
    const activeVideoSrc = videoGalleryVideo !== false ? videos[videoGalleryVideo].original : null;
    const galleryRef = useRef<ImageGallery>(null);
    if (videoGalleryVideo !== false) {
        galleryRef.current?.slideToIndex(videoGalleryVideo);
    }
    return <Overlay isVisible={videoGalleryVideo !== false} onClick={hideForm}>
        <div className="mx-auto my-0 h-[100vh] w-[100vw] p-[44px]">
            <IconCloseThick onClick={hideForm} className="size-[44px] absolute top-0 right-0 text-red-500 hover:text-red-700 cursor-pointer" />
            <ImageGallery
                onSlide={(slide) => dispatch(openVideoGallery(slide))}
                lazyLoad={true}
                ref={galleryRef}
                items={videos}
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={false}
                renderItem={({ original }) => <YoutubeVideoFrame src={original} active={activeVideoSrc === original} />}
            />
        </div>
    </Overlay>;
}

export default VideoGallery;