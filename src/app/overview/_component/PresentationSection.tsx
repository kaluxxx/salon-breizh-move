import Image from "next/image";

export default function PresentationSection() {
    return (
        <section className="flex-1 flex flex-col items-center justify-center">
            {/* Hero Section */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center before:absolute before:inset-0 before:bg-black before:bg-opacity-60"
                style={{ backgroundImage: "url('/images/salon-1.jpg')" }}>
                <div className="w-full h-[300px] sm:h-[400px] flex flex-col items-center justify-center gap-4 p-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-bold text-center relative z-10">
                        En bref
                    </h1>
                    <p className="text-white text-center text-lg sm:text-xl lg:text-2xl mb-4 relative z-10">
                        Découvrez en quelques mots le salon <strong>EUROMOVE</strong>
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 px-4 py-8 lg:mt-16">
                {/* Text Block 1 */}
                <div className="order-1">
                    <h3 className="text-3xl font-bold mb-8">Le rendez-vous incontournable du transport</h3>
                    <div className="space-y-4">
                        <p className="text-xl">
                            Conçu comme une plateforme incontournable, <strong>EUROMOVE</strong> célèbre la <strong>diversité
                            des métiers</strong> et des <strong>solutions</strong> dans le transport – du <strong>sanitaire</strong> à
                            la <strong>logistique</strong>, en passant par le <strong>transport routier</strong> et
                            de <strong>voyageurs</strong>.
                        </p>
                        <p className="text-xl">
                            Avec plus de <strong>300 exposants</strong> venus des quatre coins de l’Europe, notre ambition est d’offrir
                            un panorama complet des <strong>innovations</strong> et des <strong>défis</strong> à relever
                            dans chacun de ces domaines, tout en valorisant les <strong>avancées technologiques</strong> qui redéfinissent les standards du
                            secteur.
                        </p>
                    </div>
                </div>

                {/* Image Block 1 */}
                <div className="order-2">
                    <Image
                        src="/images/salon-1.jpg"
                        alt="Salon"
                        width={600}
                        height={300}
                        className="w-auto h-auto mx-auto max-h-[400px] rounded-lg"
                    />
                </div>

                {/* Text Block 2 */}
                <div className="order-3 lg:order-4 space-y-4">
                    <p className="text-xl">
                        En nous implantant ici, nous souhaitons renforcer les <strong>liens</strong> entre les <strong>acteurs
                        du transport</strong>, accompagner leur transition vers des <strong>solutions plus durables</strong> et contribuer
                        au <strong>rayonnement économique</strong> et <strong>technologique</strong> de la région.
                    </p>
                    <p className="text-xl">
                        <strong>EUROMOVE</strong> n’est pas qu’un salon, c’est une <strong>expérience immersive</strong> pensée pour inspirer :
                        participez à des <strong>conférences engageantes</strong>, des <strong>démonstrations captivantes</strong> et des <strong>ateliers interactifs</strong> qui mettront en lumière
                        les <strong>enjeux</strong> et <strong>opportunités</strong> du transport de demain. Que vous soyez <strong>professionnel</strong>, <strong>constructeur</strong> ou passionné
                        de <strong>mobilité</strong>, cet événement est conçu pour vous offrir une <strong>vision globale</strong> et enrichissante de l’avenir du secteur.
                    </p>
                </div>

                {/* Image Block 2 */}
                <div className="order-4 lg:order-3">
                    <Image
                        src="/images/salon-1.jpg"
                        alt="Salon"
                        width={600}
                        height={300}
                        className="w-auto h-auto mx-auto max-h-[400px] rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}
