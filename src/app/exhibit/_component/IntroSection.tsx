import Image from "next/image";

export default function IntroSection() {
    return (
        <section className="mt-[100px] flex-1 flex flex-col items-center gap-12">
            <h1 className="text-6xl text-secondary font-bold text-center">Exposer à EUROMOVE</h1>
            <div className="flex max-lg:flex-col gap-12 mt-8 container mx-auto">
                <Image src="/images/exhibit.jpg" width={800} height={400} alt="Exhibit"
                       className="flex-1 rounded-md"/>
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="text-2xl text-primary font-bold">Rejoignez la dynamique d’Euromove, le
                        rendez-vous
                        incontournable des professionnels du Transport et de la Mobilité en Europe.</h2>
                    <p className="text-lg">
                        Euromove se positionne comme une vitrine d’excellence, mettant en lumière les pratiques
                        innovantes et les solutions durables qui façonnent l’avenir de la mobilité. Cet événement
                        vous
                        offre une opportunité unique de développer votre réseau, d'accroître votre visibilité et de
                        donner un coup d'accélérateur à votre activité grâce à la participation des leaders du
                        secteur.
                    </p>
                    <p className="text-lg font-bold">
                        Euromove c'est :
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="text-lg">Le plus grand rassemblement de professionnels européens du
                            transport, de
                            la logistique et des solutions de mobilité.
                        </li>
                        <li className="text-lg">Une plateforme dédiée à l’innovation, portée par des conférences
                            exclusives, des démonstrations interactives et des partenariats stratégiques.
                        </li>
                        <li className="text-lg">L’opportunité de présenter vos produits et vos projets auprès de
                            milliers de décideurs et d’acteurs influents.
                        </li>
                    </ul>
                    <p className="text-lg">
                        Ne manquez pas l’occasion de rejoindre un écosystème d’exception, où innovation rime avec
                        opportunités. Venez exposer vos solutions et partager vos savoir-faire auprès de plus de 15
                        000
                        visiteurs professionnels prêts à construire les mobilités de demain.
                    </p>
                </div>
            </div>
        </section>

    )
}