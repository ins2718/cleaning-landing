import FirstSection from "./first-section";
// import SecondSection from "./second-section";
// import ThirdSection from "./third-section";
// import VideoSection from "./video-section";
// import { lazy } from "react";
// import RenderOnViewportEntry from "../RenderOnViewportEntry";
// const VideoSection = lazy(() => import("./video-section"));
import dynamic from "next/dynamic";
const RenderOnViewportEntry = dynamic(() => import("../RenderOnViewportEntry"), { ssr: false });
const SecondSection = dynamic(() => import("./second-section"), { ssr: false });
const ThirdSection = dynamic(() => import("./third-section"), { ssr: false });
const OurWorksSection = dynamic(() => import("./our-works-section"), { ssr: false });
const VideoSection = dynamic(() => import("./video-section"), { ssr: false });
const FaqSection = dynamic(() => import("./faq-section"), { ssr: false });

function Main() {
    return <main className="">
        <FirstSection />
        <RenderOnViewportEntry className="min-h-72">
            <SecondSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-72">
            <ThirdSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-72">
            <OurWorksSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-72">
            <VideoSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-72">
            <FaqSection />
        </RenderOnViewportEntry>
    </main>;
}

export default Main;