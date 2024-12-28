import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ThematicsSection() {
    return (
        <section
            className="px-4 py-16 min-h-[calc(100vh-70px)]"
            style={{ backgroundImage: "url(/images/wave-3.svg)", backgroundSize: "cover" }}
        >
            <h2 className="text-4xl text-secondary font-bold text-center">Les différents secteurs</h2>
            <p className="text-center mt-4">
                Découvrez les différents secteurs d'activités du salon EUROMOVE
            </p>
            <div className="container mx-auto grid grid-cols-2 justify-center gap-16 mt-16">
                <Card
                    className="min-h-96 relative flex items-center justify-center group overflow-hidden cursor-pointer"
                    style={{ backgroundImage: "url(/images/ambulance.jpg)", backgroundSize: "cover" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
                    <div className="relative z-20 text-white text-center flex flex-col items-center">
                        <CardHeader
                            className="transition-transform duration-300 group-hover:translate-y-[-25%]"
                        >
                            <CardTitle className="text-3xl">Transport sanitaire</CardTitle>
                        </CardHeader>
                        <CardContent
                            className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-300 mt-4"
                        >
                            <p>
                                Le transport sanitaire joue un rôle crucial dans la chaîne de soins en garantissant
                                la prise en charge rapide et efficace des patients, qu’il s’agisse de trajets vers des
                                structures médicales, de transferts inter-hospitaliers ou d’interventions d’urgence.
                                Ces professionnels, ambulanciers et opérateurs spécialisés, sont des maillons essentiels
                                pour préserver des vies et assurer un accès équitable aux soins, quel que soit le lieu
                                ou l’heure. EUROMOVE leur offre une plateforme pour présenter leurs innovations,
                                partager leurs défis et promouvoir leur indispensable contribution à la santé publique.
                            </p>
                        </CardContent>
                    </div>
                </Card>
                 <Card
                    className="min-h-96 relative flex items-center justify-center group overflow-hidden cursor-pointer"
                    style={{ backgroundImage: "url(/images/ambulance.jpg)", backgroundSize: "cover" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
                    <div className="relative z-20 text-white text-center flex flex-col items-center">
                        <CardHeader
                            className="transition-transform duration-300 group-hover:translate-y-[-25%]"
                        >
                            <CardTitle className="text-3xl">Transport sanitaire</CardTitle>
                        </CardHeader>
                        <CardContent
                            className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-300 mt-4"
                        >
                            <p>
                                Le transport sanitaire joue un rôle crucial dans la chaîne de soins en garantissant
                                la prise en charge rapide et efficace des patients, qu’il s’agisse de trajets vers des
                                structures médicales, de transferts inter-hospitaliers ou d’interventions d’urgence.
                                Ces professionnels, ambulanciers et opérateurs spécialisés, sont des maillons essentiels
                                pour préserver des vies et assurer un accès équitable aux soins, quel que soit le lieu
                                ou l’heure. EUROMOVE leur offre une plateforme pour présenter leurs innovations,
                                partager leurs défis et promouvoir leur indispensable contribution à la santé publique.
                            </p>
                        </CardContent>
                    </div>
                </Card>
                 <Card
                    className="min-h-96 relative flex items-center justify-center group overflow-hidden cursor-pointer"
                    style={{ backgroundImage: "url(/images/ambulance.jpg)", backgroundSize: "cover" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
                    <div className="relative z-20 text-white text-center flex flex-col items-center">
                        <CardHeader
                            className="transition-transform duration-300 group-hover:translate-y-[-25%]"
                        >
                            <CardTitle className="text-3xl">Transport sanitaire</CardTitle>
                        </CardHeader>
                        <CardContent
                            className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-300 mt-4"
                        >
                            <p>
                                Le transport sanitaire joue un rôle crucial dans la chaîne de soins en garantissant
                                la prise en charge rapide et efficace des patients, qu’il s’agisse de trajets vers des
                                structures médicales, de transferts inter-hospitaliers ou d’interventions d’urgence.
                                Ces professionnels, ambulanciers et opérateurs spécialisés, sont des maillons essentiels
                                pour préserver des vies et assurer un accès équitable aux soins, quel que soit le lieu
                                ou l’heure. EUROMOVE leur offre une plateforme pour présenter leurs innovations,
                                partager leurs défis et promouvoir leur indispensable contribution à la santé publique.
                            </p>
                        </CardContent>
                    </div>
                </Card>
                 <Card
                    className="min-h-96 relative flex items-center justify-center group overflow-hidden cursor-pointer"
                    style={{ backgroundImage: "url(/images/ambulance.jpg)", backgroundSize: "cover" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
                    <div className="relative z-20 text-white text-center flex flex-col items-center">
                        <CardHeader
                            className="transition-transform duration-300 group-hover:translate-y-[-25%]"
                        >
                            <CardTitle className="text-3xl">Transport sanitaire</CardTitle>
                        </CardHeader>
                        <CardContent
                            className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-300 mt-4"
                        >
                            <p>
                                Le transport sanitaire joue un rôle crucial dans la chaîne de soins en garantissant
                                la prise en charge rapide et efficace des patients, qu’il s’agisse de trajets vers des
                                structures médicales, de transferts inter-hospitaliers ou d’interventions d’urgence.
                                Ces professionnels, ambulanciers et opérateurs spécialisés, sont des maillons essentiels
                                pour préserver des vies et assurer un accès équitable aux soins, quel que soit le lieu
                                ou l’heure. EUROMOVE leur offre une plateforme pour présenter leurs innovations,
                                partager leurs défis et promouvoir leur indispensable contribution à la santé publique.
                            </p>
                        </CardContent>
                    </div>
                </Card>

            </div>
        </section>
    );
}
