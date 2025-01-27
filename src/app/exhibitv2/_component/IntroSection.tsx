"use client"

import Link from "next/link"
import { Users, Monitor, Calendar, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function IntroSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    const statItems = [
        { icon: Users, title: "15,000+", description: "Visiteurs professionnels" },
        { icon: Monitor, title: "300+", description: "Stands d'exposition" },
        { icon: Calendar, title: "3 jours", description: "D'opportunités business" },
        { icon: BookOpen, title: "50+", description: "Conférences et ateliers" },
    ]

    return (
        <section
            ref={ref}
            className="relative bg-primary text-white py-20 inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-image.webp')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <motion.div
                className="relative z-10 container mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="flex flex-col lg:flex-row items-center">
                    <motion.div className="lg:w-1/2 mb-10 lg:mb-0" variants={itemVariants}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 lg:leading-tight">Exposez à EUROMOVE</h1>
                        <p className="text-xl mb-8">
                            Présentez vos innovations et connectez-vous avec les leaders de l'industrie de la mobilité.
                        </p>
                        <Button asChild variant="outline">
                            <Link href="#pre-register">Obtenez votre badge</Link>
                        </Button>
                    </motion.div>
                    <motion.div className="lg:w-1/2" variants={itemVariants}>
                        <div className="grid grid-cols-2 gap-4">
                            {statItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/20 p-4 rounded-lg flex items-center"
                                    variants={itemVariants}
                                >
                                    <item.icon className="text-white mr-4 w-10 h-10" />
                                    <div>
                                        <h3 className="font-bold text-2xl mb-1">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

