import ProgramHero from "@/app/program/_component/ProgramHero"
import ProgramOverview from "@/app/program/_component/ProgramOverview"
import ProgramSchedule from "@/app/program/_component/ProgramSchedule"
import KeynoteSpeakers from "@/app/program/_component/KeynoteSpeakers"
import SpecialEvents from "@/app/program/_component/SpecialEvents"
import ThematicTracks from "@/app/program/_component/ThematicTracks"
import ProgramCTA from "@/app/program/_component/ProgramCTA"

export default function ProgramPage() {
    return (
        <>
            <ProgramHero />
            <ProgramOverview />
            <ProgramSchedule />
            <KeynoteSpeakers />
            <SpecialEvents />
            <ThematicTracks />
            <ProgramCTA />
        </>
    )
}

