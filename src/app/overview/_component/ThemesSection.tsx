"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Leaf, Bus, Ambulance } from "lucide-react"
import {useInView} from "react-intersection-observer";

const themes = [
    {
        icon: Truck,
        title: "Transport de Marchandises",
        description:
            "Découvrez les solutions innovantes pour la logistique urbaine, nationale et internationale, optimisant les flux et réduisant l'impact environnemental.",
    },
    {
        icon: Leaf,
        title: "Transport Routier",
        description:
            "Explorez les avancées en matière de sécurité, d'efficacité et de durabilité dans le secteur du transport routier, colonne vertébrale de notre économie.",
    },
    {
        icon: Bus,
        title: "Transport de Voyageurs",
        description:
            "Plongez dans l'avenir de la mobilité des personnes, des transports en commun aux solutions multimodales et partagées, pour des déplacements plus inclusifs et écologiques.",
    },
    {
        icon: Ambulance,
        title: "Transport Sanitaire",
        description:
            "Découvrez les innovations dans le domaine du transport médical, alliant technologie de pointe et prise en charge optimale des patients.",
    }
]

export default function ThemesSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12 text-white"
                >
                    Thèmes Principaux d'EUROMOVE
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {themes.map((theme, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="w-full max-w-xs mx-auto h-[300px]">
                                <CardContent className="p-6 flex flex-col items-center text-center h-full justify-between">
                                    <theme.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
                                    <p>{theme.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

