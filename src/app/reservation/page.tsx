import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

export default function Page() {
    return (
        <section className="mt-[100px] flex-1 flex flex-col items-center px-4 container mx-auto">
            <h1 className="text-6xl text-secondary font-bold text-center">Pourquoi exposer ?</h1>
            <p className="text-center text-xl mb-4">
                Découvrez les avantages et opportunités de participer à notre événement unique.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary text-4xl">Facilement accessible</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">
                            Situé au carrefour de l’arc Atlantique, l’événement est idéalement localisé pour maximiser
                            votre
                            accessibilité.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary text-4xl">Plus qu’un salon professionnel</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">
                            Créez avec vos clients et partenaires des souvenirs mémorables, remplis d’émotions et de
                            surprises
                            dans un cadre convivial.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary text-4xl">Engagez-vous dans l’action</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">
                            Prenez part à des conférences, démonstrations et ateliers interactifs, et valorisez votre
                            expertise
                            en devenant un acteur incontournable.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-primary text-4xl font-bold">Une offre adaptée à vos besoins</h2>
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
                        <li className="text-lg">Un emplacement premium dans la zone d’exposition.</li>
                        <li className="text-lg">Des services inclus, comme l’électricité et le mobilier de base.</li>
                        <li className="text-lg">Un accès exclusif aux événements réservés aux exposants.</li>
                        <li className="text-lg">Un accompagnement personnalisé pour optimiser votre participation.
                        </li>
                    </ul>
                    <p className="text-lg mt-4">
                        Donnez à votre entreprise la visibilité qu’elle mérite dans un environnement propice à
                        la création de nouvelles opportunités.
                    </p>
                </div>

                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle className="text-primary text-4xl">
                            Participez au seul événement regroupant les trois secteurs de la branche
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg mb-4">
                            Rejoignez un rassemblement exclusif et stratégique qui place votre entreprise au cœur de
                            l’innovation.
                        </p>
                        <form className="mt-4 flex flex-col gap-4">
                            <Input type="text" placeholder="Nom"/>
                            <Input type="text" placeholder="Prénom"/>
                            <Input type="text" placeholder="Entreprise"/>
                            <Input type="email" placeholder="Contact email"/>
                            <Button type="submit" className="bg-secondary text-white w-full">
                                Soumettre
                            </Button>
                        </form>
                    </CardContent>
                </Card>

            </div>
        </section>
    );
}
