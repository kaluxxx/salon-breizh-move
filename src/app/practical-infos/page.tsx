
import PracticalInfoCard from "@/app/practical-infos/_component/PraticalInfoCard";

export default function Page() {
    return (
        <section className="flex-1 flex flex-col items-center bg-no-repeat bg-bottom"
                 style={{backgroundImage: "url('/images/wave-4.svg')", backgroundSize: "contain"}}>
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center before:absolute before:inset-0 before:bg-black before:bg-opacity-60"
                style={{backgroundImage: "url('/images/salon-1.jpg')"}}>
                <div className="w-full h-[300px] sm:h-[400px] flex flex-col items-center justify-center gap-4 p-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-bold text-center relative z-10">
                        Informations pratiques
                    </h1>
                    <p className="text-white text-center text-lg sm:text-xl lg:text-2xl mb-4 relative z-10">
                        Tout ce qu'il faut savoir pour préparer votre visite
                    </p>
                </div>
            </div>
            <div className="lg:p-4 min-h-[80vh] w-full flex flex-col items-center justify-center p-4">
                <PracticalInfoCard/>
            </div>
        </section>
    )
}