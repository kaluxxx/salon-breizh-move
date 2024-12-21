import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Clock, Mail, Newspaper, Store, UserRoundPen} from "lucide-react";

export default function Home() {

    return (
        <main className="min-h-screen flex flex-col space-y-8">
            <section
                className="container mx-auto px-4 py-12 flex max-lg:flex-col items-center justify-between gap-4 lg:min-h-[700px]">
                <div className="w-full h-[400px] md:w-1/2">
                    <Image
                        src="/images/logo.png"
                        alt="Image d'accueil"
                        className="w-full h-full lg:object-contain"
                        width="1050"
                        height="700"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-lg text-gray-700">
                    <h1 className="text-4xl text-secondary font-bold">Bienvenue au Salon du Transport EUROMOVE</h1>
                    <p>L’événement de référence pour tous les acteurs de la mobilité</p>
                    <p>Rejoignez-nous pour imaginer ensemble le futur du transport ainsi que pour un moment d’échange et
                        d’innovation, au cœur des défis et transformations qui redéfinissent le monde du transport
                        aujourd’hui et pour demain !
                    </p>
                    <div className="flex space-x-4">
                        <Button asChild size="lg">
                            <Link href="/en-bref">Découvrir</Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary">
                            <Link href="/reservation/exposant">Pré-réserver</Link>
                        </Button>
                    </div>
                </div>
            </section>
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center">Accès rapide</h2>
                    <p className="text-center mb-4">Accédez rapidement aux différentes sections du site</p>
                    <div className="flex max-md:flex-col flex-wrap justify-center gap-12 mt-8">
                        <Card className="max-w-md flex flex-col justify-between">
                            <CardHeader className="flex flex-col justify-center items-center">
                                <CardTitle className="text-3xl">Pré-inscriptions</CardTitle>
                                <CardDescription>Pré-inscrivez-vous pour participer à l'événement</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex text-center flex-col items-center space-y-4">
                                    <Store size={100} className="text-secondary"/>
                                    <p>Pré-inscrivez-vous pour participer à l'événement et bénéficiez de nombreux
                                        avantages</p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-4 mb-4">
                                <Button asChild size="lg" variant="secondary">
                                    <Link href="/reservation/exposant">Pré-inscription</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="max-w-md flex flex-col justify-between">
                            <CardHeader className="flex flex-col justify-center items-center">
                                <CardTitle className="text-3xl">Visiteurs</CardTitle>
                                <CardDescription>Pré-inscrivez-vous en tant que visiteur</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex text-center flex-col items-center space-y-4">
                                    <UserRoundPen size={100} className="text-secondary"/>
                                    <p>Pré-inscrivez-vous en tant que visiteur pour participer à l'événement et
                                        bénéficiez de
                                        nombreux avantages</p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-4 mb-4">
                                <Button asChild size="lg" variant="secondary">
                                    <Link href="/reservation/visiteur">Pré-inscription</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="max-w-md flex flex-col justify-between">
                            <CardHeader className="flex flex-col justify-center items-center">
                                <CardTitle className="text-3xl">Presse</CardTitle>
                                <CardDescription>Demandez votre accréditation presse</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex text-center flex-col items-center space-y-4">
                                    <Newspaper size={100} className="text-secondary"/>
                                    <p>Demandez votre accréditation presse pour participer à l'événement et bénéficiez
                                        de
                                        nombreux avantages</p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-4 mb-4">
                                <Button asChild size="lg" variant="secondary">
                                    <Link href="/reservation/presse">Demande d'accréditation</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="max-w-md flex flex-col justify-between">
                            <CardHeader className="flex flex-col justify-center items-center">
                                <CardTitle className="text-3xl">Infos pratiques</CardTitle>
                                <CardDescription>Consultez les informations pratiques</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex text-center flex-col items-center space-y-4">
                                    <Clock size={100} className="text-secondary"/>
                                    <p>Consultez les informations pratiques pour préparer votre venue à l'événement</p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-4 mb-4">
                                <Button asChild size="lg" variant="secondary">
                                    <Link href="/infos-pratiques">En savoir plus</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="max-w-md flex flex-col justify-between">
                            <CardHeader className="flex flex-col justify-center items-center">
                                <CardTitle className="text-3xl">Contact</CardTitle>
                                <CardDescription>Contactez-nous</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex text-center flex-col items-center space-y-4">
                                    <Mail size={100} className="text-secondary"/>
                                    <p>Contactez-nous pour toute question ou demande d'information</p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-4 mb-4">
                                <Button asChild size="lg" variant="secondary">
                                    <Link href="/contact">Nous contacter</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center">Actualités</h2>
                <p className="text-center">Les dernières actualités du salon</p>
                <div className="flex max-md:flex-col gap-4 mt-8">
                    <div className="flex flex-col w-full md:w-1/3">
                        <div className="flex flex-col gap-4">
                            <div className="h-52 bg-gray-200 rounded-lg"/>
                            <div className="h-52 bg-gray-200 rounded-lg"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-2/3 gap-4">
                        <div className="h-96 bg-gray-200 rounded-lg"/>
                        <div className="h-96 bg-gray-200 rounded-lg"/>
                    </div>
                </div>
            </section>
            <section className="bg-secondary text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center">Partenaires</h2>
                    <p className="text-center">Nos partenaires</p>
                    <div className="flex max-md:flex-col flex-wrap justify-center gap-12 mt-8">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="h-36 w-36 bg-gray-200 rounded-full"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
