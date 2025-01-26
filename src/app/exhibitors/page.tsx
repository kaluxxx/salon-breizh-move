import ExhibitorsHero from "@/app/exhibitors/_component/ExhibitorsHero"
import ExhibitorsCTA from "@/app/exhibitors/_component/ExhibitorsCTA"
import ExhibitorsFilter from "@/app/exhibitors/_component/ExhibitorsFilter";
import ExhibitorsMap from "@/app/exhibitors/_component/ExhibitorsMap";
import MainSponsors from "@/app/exhibitors/_component/MainSponsors";

export default function ExhibitorsPage() {
    return (
        <>
            <ExhibitorsHero />
            <ExhibitorsFilter />
            <ExhibitorsMap />
            <MainSponsors />
            <ExhibitorsCTA />
        </>
    )
}
