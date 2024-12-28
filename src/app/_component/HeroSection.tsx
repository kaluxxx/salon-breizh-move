import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            className="flex max-lg:flex-col items-center justify-between min-h-[calc(100vh-70px)]">
            <div
                className="relative flex h-full w-full md:w-1/2 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-10">
                <Image
                    src="/images/camion.jpg"
                    alt="Hero"
                    width={1920}
                    height={1080}
                    className="z-20 object-cover w-full h-[calc(100vh)]"
                />
            </div>
            <div
                className="w-full md:w-1/2 text-xl text-gray-700 px-12">
                <div className="max-w-2xl mx-auto flex flex-col justify-center items-center gap-8">
                    <Image src="/images/logo.png" alt="Logo" width={250} height={100}/>
                    <div className="w-1/2 h-0.5 bg-primary"/>
                    <div className="w-1/3 h-0.5 bg-primary"/>
                    <div className="w-1/4 h-0.5 bg-primary"/>
                    <div className="w-1/5 h-0.5 bg-primary"/>
                    <div className="w-1/6 h-0.5 bg-primary"/>
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
                                <Link href="/en-bref">Découvrir</Link>
                            </Button>
                            <Button asChild size="lg" variant="secondary">
                                <Link href={"/reservation/exposant"}>Pré-réserver</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}