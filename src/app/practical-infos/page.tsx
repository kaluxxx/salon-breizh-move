import MapContainer from "@/app/practical-infos/_component/MapContainer";
import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Bus, Car, Clock, MapPin, Plane, SquareM, Train} from "lucide-react";

export default function Page() {
    return (
        <section className="mt-[100px] flex-1 flex flex-col items-center px-4"
                 style={{backgroundImage: "url('/images/wave-4.svg')", backgroundSize: "cover"}}
        >
            <h1 className="text-6xl text-secondary font-bold text-center">Informations pratiques</h1>
            <p className="text-center text-xl my-4">Tout ce qu'il faut savoir pour préparer votre visite</p>
            <div className="container w-full flex max-lg:flex-col justify-between pt-8 gap-4">
                <div className="flex-1 w-full flex flex-col gap-4">
                    <div className="relative min-h-96">
                        <Image src="/images/parc-expo.jpg" className="w-full rounded-md" alt="Parc des expositions"
                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill/>
                    </div>
                    <MapContainer/>
                </div>
                <Card className="w-full h-fit flex flex-col gap-4">
                    <CardHeader>
                        <CardTitle className="text-4xl">Informations pratiques</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold">Horaires et lieu</h2>
                                <ul className="flex flex-col gap-2">
                                    <li className="flex items-center gap-2">
                                        <MapPin color="#7FB05E" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Parc des expositions de Rennes, 2 La Haie Gautrais, 35170 Bruz</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Clock color="#238EB8" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Juin 2026</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold">Accès</h2>
                                <ul className="flex flex-col gap-2">
                                    <li className="flex items-center gap-2">
                                        <Car color="#7FB05E" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Autoroute: A11, A81, N157</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Plane color="#238EB8" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Aéroport: Rennes Bretagne</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SquareM color="#7FB05E" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Métro: Ligne B</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Bus color="#238EB8" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Bus: Ligne 57</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Train color="#7FB05E" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Train: Gare de Rennes</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold">Restauration</h2>
                                <p>Plusieurs points de restauration sont disponibles sur place
                                    pour vous restaurer durant votre visite.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}