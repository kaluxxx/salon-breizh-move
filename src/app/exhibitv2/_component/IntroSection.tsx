import Link from "next/link";
import { Users, Monitor, Calendar, BookOpen } from "lucide-react";
import {Button} from "@/components/ui/button";

export default function IntroSection() {
    return (
        <section className="relative bg-primary text-white py-20 inset-0 bg-cover bg-center bg-no-repeat"
                 style={{ backgroundImage: "url('/images/hero-image.webp')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 lg:leading-tight">Exposez à EUROMOVE</h1>
                        <p className="text-xl mb-8">
                            Présentez vos innovations et connectez-vous avec les leaders de l'industrie de la mobilité.
                        </p>
                        <Button asChild variant="outline">
                            <Link href="#pre-register">Obtenez votre badge</Link>
                        </Button>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/20 p-4 rounded-lg flex items-center">
                                <Users className="text-white mr-4 w-10 h-10" />
                                <div>
                                    <h3 className="font-bold text-2xl mb-1">15,000+</h3>
                                    <p>Visiteurs professionnels</p>
                                </div>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg flex items-center">
                                <Monitor className="text-white mr-4 w-10 h-10" />
                                <div>
                                    <h3 className="font-bold text-2xl mb-1">300+</h3>
                                    <p>Stands d'exposition</p>
                                </div>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg flex items-center">
                                <Calendar className="text-white mr-4 w-10 h-10" />
                                <div>
                                    <h3 className="font-bold text-2xl mb-1">3 jours</h3>
                                    <p>D'opportunités business</p>
                                </div>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg flex items-center">
                                <BookOpen className="text-white mr-4 w-10 h-10" />
                                <div>
                                    <h3 className="font-bold text-2xl mb-1">50+</h3>
                                    <p>Conférences et ateliers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
