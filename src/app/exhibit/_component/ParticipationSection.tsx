import ParticipationForm from "@/app/exhibit/_component/ParticipationForm";

export default function ParticipationSection() {
    return (
        <section className="flex flex-col gap-8 p-4 mt-8 mb-16 container mx-auto" id="pre-register">
            <h2 className="text-primary text-4xl font-bold">Participez à EUROMOVE</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                    <p className="text-lg mb-4">
                        Profitez de nos formules attractives dès <span className="font-bold">1 928€</span> pour un
                        stand de <span className="font-bold">18m²</span>.
                    </p>
                    <div className="border-4 border-red-500 p-4 rounded-md text-center mb-4">
                        <p className="text-lg font-semibold text-red-600">
                            Exposez sur 18m² pour seulement 1 928€
                        </p>
                    </div>
                    <p className="text-lg mb-4">
                        Chaque stand inclut :
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="text-lg">Un emplacement adapté à vos besoins</li>
                        <li className="text-lg">Des services inclus, comme l’électricité et le mobilier de base.
                        </li>
                    </ul>
                    <p className="text-lg mt-4">
                        Donnez à votre entreprise la visibilité qu’elle mérite dans un environnement propice à
                        la création de nouvelles opportunités.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl text-primary font-bold">Participez au seul événement regroupant les
                        trois secteurs de la branche</h3>
                    <p className="text-lg mb-4">
                        Vous souhaitez en savoir plus sur nos offres d’exposition ? Contactez-nous dès maintenant
                        pour obtenir un devis personnalisé.
                    </p>
                    <ParticipationForm/>
                </div>
            </div>

        </section>
    )
}