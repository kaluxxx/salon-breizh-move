import PracticalInfoHero from "@/app/practical-infos/_component/PracticalInfoHero";
import VenueInfo from "@/app/practical-infos/_component/VenueInfo";
import AccessInfo from "@/app/practical-infos/_component/AccessInfo";
import AdditionalInfo from "@/app/practical-infos/_component/AdditionalInfo";
import MapSection from "@/app/practical-infos/_component/MapSection";


export default function Page() {
    return (
        <>
            <PracticalInfoHero />
            <VenueInfo />
            <AccessInfo />
            <AdditionalInfo />
            <MapSection />
        </>
    )
}

