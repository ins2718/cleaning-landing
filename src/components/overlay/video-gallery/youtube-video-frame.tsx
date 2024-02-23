import options from "@/app/options";
import { useAppSelector } from "@/hooks";
import { useRef } from "react";
import YouTube from "react-youtube";

type YoutubeVideoFrameProps = {
    src: string;
    active: boolean;
}

function YoutubeVideoFrame({ src }: YoutubeVideoFrameProps) {
    const ref = useRef<any>(null);
    const onReady = (event: any) => {
        ref.current = event.target;
    };
    const { videoGalleryVideo } = useAppSelector(state => state.header);
    const { videos } = options.videoSection;
    const active = videoGalleryVideo !== false && videos[videoGalleryVideo].original === src;
    if (!active && ref.current) {
        ref.current?.pauseVideo();
    }
    const opts = {
        width: "auto",
        height: "auto",
        playerVars: {
            autoplay: active ? 1 : 0,
            mute: 1,
        }
    };
    return <YouTube
        title="limpiarmueble.pro"
        onReady={onReady}
        className="w-[calc(100vw-88px)] h-[calc(100vh-88px)]"
        iframeClassName="size-full"
        videoId={src}
        opts={opts}
    />;
}

export default YoutubeVideoFrame;