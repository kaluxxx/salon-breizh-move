import BadgeRequestForm from "@/app/visit/_component/BadgeRequestForm"

export default function BadgeRequestSection() {
    return (
        <section className="py-20 bg-gray-100 text-black" id="badge-request">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Obtenez Votre Badge Visiteur Gratuit</h2>
                        <p className="text-lg mb-4">
                            Ne manquez pas cette opportunité unique de découvrir les innovations qui façonneront l'avenir de la
                            mobilité.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Accès aux 3 jours du salon
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Participation aux conférences
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Accès à l'espace networking
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Demandez votre badge</h3>
                        <BadgeRequestForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

