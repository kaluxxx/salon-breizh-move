"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {useInView} from "react-intersection-observer";

const figures = [
    { number: "300+", label: "Exposants attendus" },
    { number: "15,000+", label: "Visiteurs estimés" },
    { number: "50+", label: "Conférences prévues" },
    { number: "3", label: "Jours d'événement" },
]

export default function KeyFiguresSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    EUROMOVE en chiffres prévisionnels
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {figures.map((figure, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-white text-primary h-full">
                                <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                                    <span className="text-4xl font-bold mb-2">{figure.number}</span>
                                    <span className="text-lg text-center">{figure.label}</span>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
