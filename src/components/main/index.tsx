import { useCsrfCookieQuery } from "@/app/api/order-form";
import FirstSection from "./first-section";
import dynamic from "next/dynamic";
import options from "@/app/options";
const RenderOnViewportEntry = dynamic(() => import("../render-on-viewport-entry"), { ssr: false });
const WhyUsSection = dynamic(() => import("./why-us-section"), { ssr: false });
const WhatWeCleanSection = dynamic(() => import("./what-we-clean-section"), { ssr: false });
const HowToOrderEasySection = dynamic(() => import("./how-to-order-easy-section"), { ssr: false });
const OurWorksSection = dynamic(() => import("./our-works-section"), { ssr: false });
const VideoSection = dynamic(() => import("./video-section"), { ssr: false });
const FaqSection = dynamic(() => import("./faq-section"), { ssr: false });
const ChooseFurnitureSection = dynamic(() => import("./choose-furnitute-section"), { ssr: false });
const TestimonialsSection = dynamic(() => import("./testimonials-section"), { ssr: false });

function Main() {
    useCsrfCookieQuery();
    const { showGallery } = options.firstSection;
    return <main className="overflow-x-hidden">
        <FirstSection />
        <RenderOnViewportEntry className="min-h-[1183px] lg:min-h-[903px]" id="choose-furniture">
            <ChooseFurnitureSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-[506px]" id="why-us-section">
            <WhyUsSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-[531px]" id="what-we-clean-section">
            <WhatWeCleanSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-[506px]" id="how-to-order-easy-section">
            <HowToOrderEasySection />
        </RenderOnViewportEntry>
        {!showGallery && <RenderOnViewportEntry className="min-h-[830px]" id="our-works-section">
            <OurWorksSection />
        </RenderOnViewportEntry>}
        <RenderOnViewportEntry className="min-h-[1459px] min-[720px]:min-h-[1030px]" id="video-section">
            <VideoSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-[456px]" id="testimonials-section">
            <TestimonialsSection />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry className="min-h-[943px]" id="faq-section">
            <FaqSection />
        </RenderOnViewportEntry>
    </main>;
}

export default Main;