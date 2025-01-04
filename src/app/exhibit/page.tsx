import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";

export default function Page() {
    return (
        <section className="mt-[100px] flex-1 flex flex-col items-center gap-12">
            <h1 className="text-6xl text-secondary font-bold text-center">Exposer à EUROMOVE</h1>
            <div className="flex max-lg:flex-col gap-12 mt-8 container mx-auto">
                <Image src="/images/exhibit.jpg" width={800} height={400} alt="Exhibit" className="flex-1 rounded-md"/>
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="text-2xl text-primary font-bold">Rejoignez la dynamique d’Euromove, le rendez-vous
                        incontournable des professionnels du Transport et de la Mobilité en Europe.</h2>
                    <p className="text-lg">
                        Euromove se positionne comme une vitrine d’excellence, mettant en lumière les pratiques
                        innovantes et les solutions durables qui façonnent l’avenir de la mobilité. Cet événement vous
                        offre une opportunité unique de développer votre réseau, d'accroître votre visibilité et de
                        donner un coup d'accélérateur à votre activité grâce à la participation des leaders du secteur.
                    </p>
                    <p className="text-lg font-bold">
                        Euromove c'est :
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="text-lg">Le plus grand rassemblement de professionnels européens du transport, de
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
                        opportunités. Venez exposer vos solutions et partager vos savoir-faire auprès de plus de 15 000
                        visiteurs professionnels prêts à construire les mobilités de demain.
                    </p>
                </div>
            </div>
            <div className="w-full bg-secondary text-white p-12 mt-8">
                <div className="flex max-lg:flex-col items-center justify-between gap-8 container mx-auto">
                    <p className="text-3xl text-center">
                        + 15 000<br/>visiteurs attendus
                    </p>
                    <p className="text-3xl text-center">
                        + 300<br/>exposants
                    </p>
                    <p className="text-3xl text-center">
                        3 jours<br/>de rencontres et d’échanges
                    </p>
                    <p className="text-3xl text-center">
                        + 100<br/>conférences et ateliers
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-8 my-8 container mx-auto">
                <h2 className="text-primary text-4xl font-bold">3 raisons d’exposer à Euromove</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="text-center flex flex-col items-center justify-between">
                        <CardHeader className="gap-4 flex-1">
                            <CardTitle className="text-secondary text-4xl">Rencontrez vos futurs partenaires</CardTitle>
                            <CardDescription className="relative h-72">
                                <Image src="/svg/partner.svg" fill className="w-72 h-72" alt="Partners"/>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg">
                                Profitez d’un environnement propice à la rencontre et à l’échange pour développer votre
                                réseau et identifier de nouvelles opportunités de collaboration.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="text-center flex flex-col items-center justify-between">
                        <CardHeader className="gap-4 flex-1">
                            <CardTitle className="text-secondary text-4xl">Valorisez votre expertise</CardTitle>
                            <CardDescription className="relative h-full">
                                <Image src="/svg/experts.svg" fill className="w-72 h-72" alt="Partners"/>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg">
                                Partagez vos connaissances et votre savoir-faire avec une audience qualifiée et
                                intéressée par vos solutions innovantes. Profitez d’un cadre unique pour mettre en avant
                                votre expertise.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="text-center flex flex-col items-center justify-between">
                        <CardHeader className="gap-4 flex-1">
                            <CardTitle className="text-secondary text-4xl">Développez votre visibilité</CardTitle>
                            <CardDescription className="relative h-full">
                                <Image src="/svg/work-chat.svg" fill className="w-72 h-72" alt="Partners"/>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg">
                                Profitez d’une plateforme de communication unique pour mettre en avant vos produits et
                                services et renforcer votre positionnement sur le marché. Gagnez en visibilité et en
                                notoriété.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <LinkButton className="bg-secondary text-white w-fit mx-auto" href='/#pre-register' size="lg">
                    Je souhaite exposer
                </LinkButton>
            </div>
            <div className="flex flex-col gap-8 my-8 container mx-auto">
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
                            <li className="text-lg">Un emplacement premium dans la zone d’exposition.</li>
                            <li className="text-lg">Des services inclus, comme l’électricité et le mobilier de base.
                            </li>
                            <li className="text-lg">Un accès exclusif aux événements réservés aux exposants.</li>
                            <li className="text-lg">Un accompagnement personnalisé pour optimiser votre participation.
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
                        <form className="flex flex-col gap-4">
                            <Input type="text" placeholder="Nom"/>
                            <Input type="text" placeholder="Prénom"/>
                            <Input type="text" placeholder="Entreprise"/>
                            <Input type="email" placeholder="Contact email"/>
                            <Button type="submit" className="bg-secondary text-white w-full">
                                Demander un devis
                            </Button>
                        </form>
                    </div>
                </div>

            </div>
            {/*<Card className="h-fit">*/}
            {/*    <CardHeader>*/}
            {/*        <CardTitle className="text-primary text-4xl">*/}
            {/*
            {/*        </CardTitle>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent>*/}
            {/*        <p className="text-lg mb-4">*/}
            {/*            Rejoignez un rassemblement exclusif et stratégique qui place votre entreprise au cœur de*/}
            {/*            l’innovation.*/}
            {/*        </p>*/}
            {/*        <form className="mt-4 flex flex-col gap-4">*/}
            {/*            <Input type="text" placeholder="Nom"/>*/}
            {/*            <Input type="text" placeholder="Prénom"/>*/}
            {/*            <Input type="text" placeholder="Entreprise"/>*/}
            {/*            <Input type="email" placeholder="Contact email"/>*/}
            {/*            <Button type="submit" className="bg-secondary text-white w-full">*/}
            {/*                Soumettre*/}
            {/*            </Button>*/}
            {/*        </form>*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}

        </section>
    );
}
