import Image from "next/image";

export default function PresentationSection() {
    return (
            <section className="mt-[100px] flex-1 flex flex-col items-center justify-center container mx-auto px-4">
                <h1 className="text-6xl text-secondary font-bold text-center">En bref</h1>
                <p className="text-center text-xl mb-4">Découvrez en quelques mots le salon EUROMOVE</p>
                <div className="mt-8">
                    <Image src="/images/salon-1.jpg"
                           alt="Salon"
                           width={600}
                           height={300}
                           className="rounded-lg float-right ml-8 my-8"
                    />
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold">EUROMOVE, le rendez-vous incontournable du transport</h3>
                        <p className="text-xl mt-4">
                            Conçu comme une plateforme incontournable, EUROMOVE célèbre la diversité des métiers et des
                            solutions dans le transport – du sanitaire à la logistique, en passant par le transport
                            routier et de voyageurs.Conçu comme une plateforme incontournable, EUROMOVE célèbre la
                            diversité des métiers et des solutions dans le transport – du sanitaire à la logistique, en
                            passant par le transport routier et de voyageurs.
                        </p>
                        <p className="text-xl mt-4">
                            Avec plus de 300 exposants venus des quatre coins de l’Europe, notre ambition est d’offrir
                            un panorama complet des innovations et des défis à relever dans chacun de ces domaines, tout
                            en valorisant les avancées technologiques qui redéfinissent les standards du secteur.
                        </p>
                    </div>
                    <Image src="/images/salon-1.jpg"
                           alt="Salon"
                           width={600}
                           height={300}
                           className="rounded-lg float-left mr-8 my-8"
                    />
                    <div className="mt-16">
                        <p className="text-xl mt-4">
                            En nous implantant ici, nous souhaitons renforcer les liens entre les acteurs du transport,
                            accompagner leur transition vers des solutions plus durables et contribuer au rayonnement
                            économique et technologique (de la région.)
                        </p>
                        <p className="text-xl mt-4">
                            EUROMOVE n’est pas qu’un salon, c’est une expérience immersive pensée pour inspirer :
                            participez à des conférences engageantes, des démonstrations captivantes et des ateliers
                            interactifs qui mettront en lumière les enjeux et opportunités du transport de demain. Que
                            vous soyez professionnel, constructeur ou passionné de mobilité, cet événement est conçu
                            pour vous offrir une vision globale et enrichissante de l’avenir du secteur.
                        </p>
                    </div>
                </div>
            </section>
    )
}