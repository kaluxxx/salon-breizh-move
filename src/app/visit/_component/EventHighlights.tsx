"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const highlights = [
    {
        title: "Zone d'Innovation",
        description: "Découvrez les dernières technologies en matière de mobilité durable et intelligente.",
        image: "/images/salon-1.jpg",
    },
    {
        title: "Conférences Inspirantes",
        description: "Assistez à des présentations données par des leaders de l'industrie et des visionnaires.",
        image: "/images/salon-1.jpg",
    },
    {
        title: "Espace Networking",
        description:
            "Connectez-vous avec des professionnels partageant les mêmes idées et créez de nouvelles opportunités.",
        image: "/images/salon-1.jpg",
    },
]

export default function EventHighlights() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section ref={ref} className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    Les Temps Forts d'EUROMOVE
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {highlights.map((highlight, index) => (
                        <motion.div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg" variants={itemVariants}>
                            <Image
                                src={highlight.image || "/placeholder.svg"}
                                alt={highlight.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{highlight.title}</h3>
                                <p className="text-gray-700">{highlight.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

