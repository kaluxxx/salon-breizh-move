import IntroSection from "@/app/visit/_component/IntroSection"
import EventHighlights from "@/app/visit/_component/EventHighlights"
import VisitorGuide from "@/app/visit/_component/VisitorGuide"
import ExhibitorShowcase from "@/app/visit/_component/ExhibitorShowcase"
import BadgeRequestSection from "@/app/visit/_component/BadgeRequestSection"

export default function Page() {
    return (
        <>
            <IntroSection />
            <EventHighlights />
            <VisitorGuide />
            <ExhibitorShowcase />
            <BadgeRequestSection />
        </>
    )
}

