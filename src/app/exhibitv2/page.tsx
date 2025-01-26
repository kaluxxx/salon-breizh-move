import IntroSection from "@/app/exhibitv2/_component/IntroSection"
import ExhibitorHighlights from "@/app/exhibitv2/_component/ExhibitorHighlights"
import ExhibitorGuide from "@/app/exhibitv2/_component/ExhibitorGuide"
import SectorShowcase from "@/app/exhibitv2/_component/SectorShowcase"
import ParticipationSection from "@/app/exhibitv2/_component/ParticipationSection"

export default function Page() {
    return (
        <>
            <IntroSection />
            <ExhibitorHighlights />
            <ExhibitorGuide />
            <SectorShowcase />
            <ParticipationSection />
        </>
    )
}
