import FirstSection from "./first-section";
import dynamic from "next/dynamic";
const RenderOnViewportEntry = dynamic(() => import("../RenderOnViewportEntry"), { ssr: false });
const WhatWeCleanSection = dynamic(() => import("./what-we-clean-section"), { ssr: false });
const WhyUsSection = dynamic(() => import("./why-us-section"), { ssr: false });
const OurWorksSection = dynamic(() => import("./our-works-section"), { ssr: false });
const VideoSection = dynamic(() => import("./video-section"), { ssr: false });
const FaqSection = dynamic(() => import("./faq-section"), { ssr: false });

function Main() {
    return <main className="">
        <FirstSection />
        <RenderOnViewportEntry className="min-h-[531px]" id="what-we-clean-section">
            <WhatWeCleanSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-[506px]" id="why-us-section">
            <WhyUsSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-[830px]" id="our-works-section">
            <OurWorksSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-[980px]" id="video-section">
            <VideoSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-72" id="faq-section">
            <FaqSection />
        </RenderOnViewportEntry>
    </main>;
}

export default Main;