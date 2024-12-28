import LastNewsCarousel from "@/app/_component/LastNewsCarousel";

export default function LatestNewsSection() {
    return (
        <section
            className="min-h-screen bg-secondary text-white flex flex-col items-center justify-center px-8 py-12"
        >
            <h2 className="text-6xl font-bold text-center">Actualités</h2>
            <p className="text-center text-xl">Les dernières actualités du salon</p>
            <div className="container mx-auto mt-8">
                <LastNewsCarousel/>
            </div>
        </section>
    )
}