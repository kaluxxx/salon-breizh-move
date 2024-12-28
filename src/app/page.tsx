import PartnerSection from "@/app/_component/PartnerSection";
import LatestNewsSection from "@/app/_component/LatestNewsSection";
import FastAccessSection from "@/app/_component/FastAccessSection";
import HeroSection from "@/app/_component/HeroSection";

export default function Home() {

    return (
        <main className="min-h-screen flex flex-col space-y-8">
            <HeroSection/>
            <FastAccessSection/>
            <LatestNewsSection/>
            <PartnerSection/>
        </main>
    );
}
