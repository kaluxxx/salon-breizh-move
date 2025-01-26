"use client"

import {motion} from "framer-motion"
import {Card, CardContent} from "@/components/ui/card"
import {Utensils, ParkingMeterIcon as CarPark} from "lucide-react"
import {useInView} from "react-intersection-observer";

export default function AdditionalInfo() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
                    transition={{duration: 0.5}}
                    className="text-3xl font-bold text-center mb-12 text-primary"
                >
                    Informations complémentaires
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
                        transition={{duration: 0.5}}
                    >
                        <Card className="h-full">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <Utensils className="w-12 h-12 text-primary mb-4"/>
                                <h3 className="text-xl font-semibold mb-4">Restauration</h3>
                                <p className="text-muted-foreground">
                                    Un restaurant de qualité est à votre disposition sur place, offrant une variété de
                                    plats pour tous les
                                    goûts. Des options végétariennes et véganes sont également disponibles. De plus,
                                    plusieurs food trucks
                                    seront présents pour proposer des options de restauration rapide et diversifiée.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        <Card className="h-full">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <CarPark className="w-12 h-12 text-primary mb-4"/>
                                <h3 className="text-xl font-semibold mb-4">Parking</h3>
                                <p className="text-muted-foreground">
                                    Un parking facile d'accès est disponible sur place avec un total de 500 places. Il
                                    suffit de suivre
                                    les panneaux indicateurs pour accéder directement au parking. Le parking est
                                    accessible depuis
                                    l'autoroute A11, et il est sécurisé et bien éclairé, offrant une solution de
                                    stationnement pratique
                                    pour les visiteurs. Des bornes de recharge pour véhicules électriques sont également
                                    disponibles.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

