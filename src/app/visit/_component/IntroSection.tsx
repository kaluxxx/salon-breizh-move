import Link from "next/link"
import {Button} from "@/components/ui/button";

export default function IntroSection() {
    return (
        <section className="relative bg-primary text-white py-20 inset-0 bg-cover bg-center bg-no-repeat"
                 style={{ backgroundImage: "url('/images/hero-image.webp')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 lg:leading-tight">
                            Découvrez le Futur de la Mobilité à EUROMOVE
                        </h1>
                        <p className="text-xl mb-8">Immergez-vous dans trois jours d'innovation, de networking et d'inspiration.</p>
                        <Button asChild variant="outline">
                            <Link href="#badge-request">Obtenez votre badge</Link>
                        </Button>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/20 p-4 rounded-lg">
                                <h3 className="font-bold text-2xl mb-2">300+</h3>
                                <p>Exposants innovants</p>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg">
                                <h3 className="font-bold text-2xl mb-2">50+</h3>
                                <p>Conférences exclusives</p>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg">
                                <h3 className="font-bold text-2xl mb-2">3 jours</h3>
                                <p>D'expériences uniques</p>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg">
                                <h3 className="font-bold text-2xl mb-2">15,000+</h3>
                                <p>Professionnels attendus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

