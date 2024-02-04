import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import GalleryItem from "./gallery-item";
import options from "@/app/options";

function VideoSection() {
    const { videos } = options;
    return <div className="relative mb-[67px] pt-[50px] pb-0">
        <div className="px-[15px] max-w-[1260px] mx-auto my-0">
            <h2 className="mb-[27px] font-[museo] font-bold text-[40px] leading-[46px] text-center text-[#444b54] relative
            before:top-[-23px] before:left-0 before:right-0 before:my-0 before:mx-auto before:absolute before:content-[''] before:w-[96px] before:h-[2px] before:bg-[#ccc]">
                Un vídeo que dice más que mil palabras...
            </h2>
            <div className="mx-[-10px] flex flex-wrap justify-evenly items-center">
                {videos.map((video, i) => <GalleryItem key={i} url={video.thumbnail} index={i} />)}
            </div>
            <div className="mt-[40px] flex justify-center items-center">
                <ButtonOrder />
                <ButtonWhatsApp />
            </div>
        </div>
    </div>;
}

export default VideoSection;