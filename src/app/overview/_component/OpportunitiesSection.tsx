"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Presentation, HandshakeIcon } from "lucide-react"
import {useInView} from "react-intersection-observer";

const opportunities = [
    {
        icon: Users,
        title: "Networking",
        description:
            "Rencontrez des professionnels du secteur, des décideurs et des innovateurs pour créer de nouvelles opportunités de collaboration.",
    },
    {
        icon: Lightbulb,
        title: "Découverte",
        description:
            "Explorez les dernières innovations et technologies qui façonnent l'avenir du transport et de la mobilité.",
    },
    {
        icon: Presentation,
        title: "Apprentissage",
        description:
            "Assistez à des conférences et des ateliers animés par des experts de l'industrie pour rester à la pointe des tendances.",
    },
    {
        icon: HandshakeIcon,
        title: "Partenariats",
        description:
            "Trouvez de nouveaux partenaires commerciaux et explorez des opportunités de collaboration intersectorielle.",
    },
]

export default function OpportunitiesSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12 text-primary"
                >
                    Opportunités pour les Participants
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {opportunities.map((opportunity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="w-full max-w-xs mx-auto h-[300px]">
                                <CardContent className="p-6 flex flex-col items-center text-center h-full justify-between">
                                    <opportunity.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                                    <p>{opportunity.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

