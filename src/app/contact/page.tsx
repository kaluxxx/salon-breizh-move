import ContactForm from "@/app/contact/_component/form";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Page() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-bottom"
                 style={{backgroundImage: "url('/images/wave-4.svg')", backgroundSize: "contain"}}>
            {/* Hero Section */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center before:absolute before:inset-0 before:bg-black before:bg-opacity-60"
                style={{backgroundImage: "url('/images/salon-1.jpg')"}}>
                <div className="w-full h-[300px] sm:h-[400px] flex flex-col items-center justify-center gap-4 p-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-bold text-center relative z-10">
                        Contactez-nous
                    </h1>
                    <p className="text-white text-center text-lg sm:text-xl lg:text-2xl mb-4 relative z-10">
                        Vous avez une question ou une demande spécifique ?
                    </p>
                </div>
            </div>
            <div
                className="flex-1 w-full text-xl text-gray-700 p-4 lg:px-12 lg:py-8 flex max-lg:flex-col items-center justify-center container gap-16">
                <Card className="w-full max-w-6xl h-fit flex flex-col gap-4 lg:mt-16">
                    <CardHeader>
                        <CardTitle className="text-4xl">Prenez contact avec nous</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex-1 flex max-lg:flex-col justify-center gap-16">
                            <div className="flex-1">
                                <p className="text-xl mt-4">
                                    Que vous ayez besoin d’informations supplémentaires, d’assistance ou d’un
                                    renseignement particulier, notre équipe est là pour vous accompagner.
                                </p>
                                <p className="text-xl mt-4">
                                    N'hésitez pas à nous faire part de vos demandes, suggestions ou préoccupations. Nous
                                    serons heureux de vous répondre dans les plus brefs délais.
                                </p>
                                <p className="text-xl mt-4">
                                    Nous nous engageons à vous fournir une réponse rapide et personnalisée pour que vous
                                    obteniez l’aide nécessaire dans les plus courts délais.
                                </p>
                            </div>
                            <ContactForm/>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
