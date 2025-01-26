"use client"

import {motion} from "framer-motion"
import {Card, CardContent} from "@/components/ui/card"
import {Car, Plane, Train, Bus} from "lucide-react"
import Link from "next/link"
import {useInView} from "react-intersection-observer";

const accessMethods = [
    {
        icon: Car,
        title: "En voiture",
        description: "Autoroute: A11, A81, N157",
        link: "#",
    },
    {
        icon: Plane,
        title: "En avion",
        description: "Aéroport: Rennes Bretagne",
        link: "https://www.rennes.aeroport.fr/",
    },
    {
        icon: Train,
        title: "En train",
        description: "Gare de Rennes",
        link: "https://www.sncf.com/fr",
    },
    {
        icon: Bus,
        title: "En transports en commun",
        description: "Métro: Ligne B, Bus: Ligne 57",
        link: "https://www.star.fr/",
    },
]

export default function AccessInfo() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
                    transition={{duration: 0.5}}
                    className="text-3xl font-bold text-center mb-12 text-white"
                >
                    Comment venir ?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {accessMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 50}}
                            animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            <Card className="h-full">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <method.icon className="w-12 h-12 text-primary mb-4"/>
                                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                                    <p className="text-muted-foreground mb-4">{method.description}</p>
                                    <Link href={method.link} target="_blank" className="text-primary hover:underline">
                                        Plus d'informations
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

