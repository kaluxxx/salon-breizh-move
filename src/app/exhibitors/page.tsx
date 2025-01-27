import ExhibitorsHero from "@/app/exhibitors/_component/ExhibitorsHero"
import ExhibitorsCTA from "@/app/exhibitors/_component/ExhibitorsCTA"
import ExhibitorsFilter from "@/app/exhibitors/_component/ExhibitorsFilter";

export default function ExhibitorsPage() {
    return (
        <>
            <ExhibitorsHero />
            <ExhibitorsFilter />
            <ExhibitorsCTA />
        </>
    )
}
