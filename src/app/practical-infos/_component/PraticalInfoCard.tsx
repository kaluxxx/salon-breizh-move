import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Bus, Car, Clock, MapPin, Plane, SquareM, Train} from "lucide-react";
import Link from "next/link";
import MapContainer from "@/app/practical-infos/_component/MapContainer";

export default function PracticalInfoCard() {
    return (
        <Card className="w-full max-w-6xl h-fit flex flex-col gap-4 lg:mt-16">
            <CardHeader>
                <CardTitle className="text-4xl">Informations pratiques</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="w-full max-w-6xl flex max-xl:flex-col gap-8">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold">Horaires et lieu</h2>
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center gap-2">
                                    <Link
                                        href="https://www.google.com/maps/place/Parc+des+expositions+de+Rennes/"
                                        target="_blank"
                                        className="flex items-center gap-2 hover:underline "
                                    >
                                        <MapPin color="#7FB05E" strokeWidth={3} absoluteStrokeWidth/>
                                        <span className="flex-1">Parc des expositions de Rennes, 2 La Haie Gautrais, 35170 Bruz</span>
                                    </Link>
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
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2 hover:underline "
                                    >
                                        <Car color="#7FB05E" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Autoroute: A11, A81, N157</span>
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Link
                                        href="https://www.rennes.aeroport.fr/"
                                        target="_blank"
                                        className="flex items-center gap-2 hover:underline "
                                    >
                                        <Plane color="#238EB8" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Aéroport: Rennes Bretagne</span>
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Link
                                        href="https://www.star.fr/"
                                        target="_blank"
                                        className="flex items-center gap-2 hover:underline "
                                    >
                                        <SquareM color="#7FB05E" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Métro: Ligne B</span>
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Link
                                        href="https://www.star.fr/"
                                        target="_blank"
                                        className="flex items-center gap-2 hover:underline "
                                    >
                                        <Bus color="#238EB8" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Bus: Ligne 57</span>
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Link
                                        href="https://www.sncf.com/fr"
                                        target="_blank"
                                        className="flex items-center gap-2 hover:underline "
                                    >
                                        <Train color="#7FB05E" strokeWidth={3} absoluteStrokeWidth/>
                                        <span>Train: Gare de Rennes</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold">Restauration</h2>
                            <p>Un restaurant de qualité est à votre disposition sur place.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold">Parking</h2>
                            <p>Un parking facile d'accès est disponible sur place avec un total de 500 places. Il suffit
                                de suivre les panneaux indicateurs pour accéder directement au parking.</p>
                            <p>Le parking est accessible depuis l'autoroute A11, et il est sécurisé et bien éclairé,
                                offrant une solution de stationnement pratique pour les visiteurs.</p>
                        </div>
                    </div>
                    <div className="w-full max-w-6xl flex flex-col gap-4">
                        <MapContainer/>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
