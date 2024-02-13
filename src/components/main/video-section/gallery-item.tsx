import { calcImageOptimizedSrc } from "@/components/Image";
import IconPlayCircleOutline from "@/components/icons/icon-play-circle-outline";
import { useAppDispatch } from "@/hooks";
import { openVideoGallery } from "@/reducers/header-reducer";

type GalleryItemProps = {
    url: string;
    index: number;
}

function GalleryItem({ url, index }: GalleryItemProps) {
    const dispatch = useAppDispatch();
    return <div style={{ backgroundImage: `url(${calcImageOptimizedSrc(url)})` }} className="my-[10px] mx-auto min-[720px]:mx-[10px] w-[calc(83.4%-10px)] min-[720px]:w-[calc(50%-20px)] relative h-[363px] bg-cover bg-center cursor-pointer break-words">
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                dispatch(openVideoGallery(index))
            }}
            className="flex absolute size-full left-0 top-0 justify-center items-center duration-300
    after:size-full after:opacity-0 after:transition-opacity after:hover:opacity-100 after:duration-300 after:left-0 after:top-0 after:absolute after:content-[''] after:bg-[linear-gradient(0deg,rgba(27,136,216,0.68),rgba(27,136,216,0.68))]"
        >
            <div className="relative z-[2]">
                <IconPlayCircleOutline width="83px" height="83px" className="text-white" />
            </div>
        </a>
    </div>;
}

export default GalleryItem;