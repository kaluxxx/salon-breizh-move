import HeroSection from "@/app/_component/HeroSection"
import FastAccessSection from "@/app/_component/FastAccessSection"
import LatestNewsSection from "@/app/_component/LatestNewsSection"
import EventHighlights from "@/app/_component/EventHighlights"

export default function Home() {
    return (
        <>
            <HeroSection />
            <EventHighlights />
            <FastAccessSection />
            <LatestNewsSection />
        </>
    )
}

