import Link from "next/link"

export default function IntroSection() {
    return (
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                            Découvrez le Futur de la Mobilité à EUROMOVE
                        </h1>
                        <p className="text-xl mb-8">Immergez-vous dans trois jours d'innovation, de networking et d'inspiration.</p>
                        <Link
                            href="#badge-request"
                            className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300"
                        >
                            Obtenez votre badge gratuit
                        </Link>
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

