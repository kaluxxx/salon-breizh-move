import Image from "next/image";

export default function IntroSection() {
    return (
        <section className="flex-1 flex flex-col items-center gap-8">
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center before:absolute before:inset-0 before:bg-black before:bg-opacity-60"
                style={{ backgroundImage: "url('/images/salon-1.jpg')" }}>
                <div className="w-full h-[300px] sm:h-[400px] flex flex-col items-center justify-center gap-4 p-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-bold text-center relative z-10 lg:leading-tight">
                        Participez à EUROMOVE
                    </h1>
                    <p className="text-white text-center text-lg sm:text-xl lg:text-2xl mb-4 relative z-10">
                        <strong>Le Salon de la Mobilité de Demain</strong>
                    </p>
                </div>
            </div>
            <div className="flex-1 flex max-lg:flex-col gap-12 lg:mt-8 lg:mb-24 p-4 container mx-auto">
                <div className="flex-1 flex flex-col gap-4 lg:order-2">
                    <h2 className="text-2xl text-primary font-bold">Rejoignez la dynamique d’Euromove, le
                        rendez-vous
                        incontournable des professionnels du Transport Sanitaire, Voyageurs et Marchandise.</h2>
                    <p className="text-lg">
                        <strong>Euromove</strong> se positionne comme une vitrine d’excellence, mettant en lumière les pratiques
                        innovantes et les solutions durables qui façonnent l’avenir de la mobilité. Cet événement
                        vous
                        offre une opportunité unique de développer votre réseau, d'accroître votre visibilité et de
                        donner un coup d'accélérateur à votre activité grâce à la participation des leaders du
                        secteur.
                    </p>
                    <p className="text-lg font-bold">
                        <strong>Euromove c'est :</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="text-lg"><strong>Le plus grand rassemblement de professionnels européens</strong> du
                            transport, de
                            la logistique et des solutions de mobilité.
                        </li>
                        <li className="text-lg"><strong>Une plateforme dédiée à l’innovation, portée par des conférences</strong>
                            exclusives, des démonstrations interactives et des partenariats stratégiques.
                        </li>
                        <li className="text-lg"><strong>L’opportunité de présenter vos produits et vos projets</strong> auprès de
                            milliers de décideurs et d’acteurs influents.
                        </li>
                    </ul>
                    <p className="text-lg">
                        Ne manquez pas l’occasion de rejoindre un <strong>écosystème d’exception</strong>, où innovation rime avec
                        opportunités. Venez exposer vos solutions et partager vos savoir-faire auprès de plus de <strong>15 000
                        visiteurs professionnels</strong> prêts à construire les mobilités de demain.
                    </p>
                </div>
                <div className="flex-1 flex gap-4 max-h-[550px] lg:order-1">
                    <Image src="/images/exhibit.webp" width={800} height={400} alt="Exhibit"
                           className="w-full h-auto object-cover rounded-xl"/>
                </div>
            </div>
        </section>
    )
}
