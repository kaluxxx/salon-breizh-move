import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            className="container mx-auto px-12 md:px-4 py-12 flex max-lg:flex-col items-center justify-between gap-4 lg:min-h-[700px]">
            <div className="w-full lg:h-[400px] md:w-1/2">
                <Image
                    src="/images/logo.png"
                    alt="Image d'accueil"
                    className="w-4/5 mx-auto lg:object-contain"
                    width="1050"
                    height="700"
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-lg text-gray-700">
                <h1 className="text-4xl text-secondary font-bold">Bienvenue au Salon du Transport EUROMOVE</h1>
                <p>L’événement de référence pour tous les acteurs de la mobilité</p>
                <p>Rejoignez-nous pour imaginer ensemble le futur du transport ainsi que pour un moment d’échange et
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
        </section>
    )
}