import MapContainer from "@/app/practical-infos/_component/MapContainer";
import Image from "next/image";
import PracticalInfoCard from "@/app/practical-infos/_component/PraticalInfoCard";

export default function Page() {
    return (
        <section className="mt-[100px] flex-1 flex flex-col items-center px-4"
                 style={{backgroundImage: "url('/images/wave-4.svg')", backgroundSize: "cover"}}
        >
            <h1 className="text-6xl text-secondary font-bold text-center">Informations pratiques</h1>
            <p className="text-center text-xl my-4">Tout ce qu'il faut savoir pour préparer votre visite</p>
            <div className="container w-full flex max-lg:flex-col justify-between pt-8 gap-4">
                <div className="flex-1 w-full flex flex-col gap-4">
                    <div className="relative min-h-96">
                        <Image src="/images/parc-expo.jpg" className="w-full rounded-md" alt="Parc des expositions"
                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill/>
                    </div>
                    <MapContainer/>
                </div>
                <PracticalInfoCard/>
            </div>
        </section>
    )
}