import HeroSection from "@/app/overview/_component/HeroSection";
import PresentationSection from "@/app/overview/_component/PresentationSection";
import KeyFiguresSection from "@/app/overview/_component/KeyFiguresSection";
import ThemesSection from "@/app/overview/_component/ThemesSection";
import OpportunitiesSection from "@/app/overview/_component/OpportunitiesSection";
import CallToActionSection from "@/app/overview/_component/CallToActionSection";


export default function OverviewPage() {
    return (
        <>
            <HeroSection />
            <PresentationSection />
            <KeyFiguresSection />
            <ThemesSection />
            <OpportunitiesSection />
            <CallToActionSection />
        </>
    )
}

