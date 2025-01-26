import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import CarouselHero from "@/components/CarouselHero";


export default function HeroSection() {
    return (
        <section
            className="xl:min-h-[calc(100vh-70px)] flex max-lg:flex-col items-center justify-between lg:p-8">
            <div className="flex h-full w-full xl:w-1/2">
                <CarouselHero/>
            </div>
            <div
                className="w-full xl:w-1/2 text-xl text-gray-700 p-12">
                <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8">
                    <Image src="/images/logo.png" alt="Logo" width={200} height={200} className="w-96 h-auto lg:w-72"/>
                    <h1 className="text-4xl text-center text-secondary font-bold">Le rendez-vous incontournable des
                        leaders du transport
                        et de la mobilité durable</h1>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <p>Bienvenue au Salon du Transport EUROMOVE</p>
                        <p>L’événement de référence pour tous les acteurs de la mobilité</p>
                        <p>Rejoignez-nous pour imaginer ensemble le futur du transport ainsi que pour un moment
                            d’échange et
                            d’innovation, au cœur des défis et transformations qui redéfinissent le monde du transport
                            aujourd’hui et pour demain !
                        </p>
                        <div className="flex space-x-4">
                            <Button asChild size="lg">
                                <Link href="/overview">Découvrir</Link>
                            </Button>
                            <Button asChild size="lg" variant="secondary">
                                <Link href={"/reservation/exposant"}>Exposer ou Visiter</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}