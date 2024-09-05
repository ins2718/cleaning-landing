import ButtonOrder from "@/components/buttons/button-order";
import ButtonWhatsApp from "@/components/buttons/button-whats-app";
import GalleryItem from "./gallery-item";
import options from "@/app/options";
import Section from "@/components/section";

function VideoSection() {
    const { videos, title, subtitle } = options.videoSection;
    return <Section
        header={title}
        subHeader={subtitle}
        footer={<>
            <ButtonOrder />
            <ButtonWhatsApp />
        </>}
        bodyWrapperClassName="mx-[-10px] flex flex-wrap justify-evenly items-center"
    >
        {videos.map((video, i) => <GalleryItem key={i} url={video.thumbnail} index={i} />)}
    </Section>
}

export default VideoSection;