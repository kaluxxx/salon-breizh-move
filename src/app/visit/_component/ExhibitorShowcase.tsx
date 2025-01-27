"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const exhibitors = [
    { name: "TechMobility", logo: "/images/salon-1.jpg", description: "Solutions de mobilité intelligente" },
    { name: "GreenTransit", logo: "/images/salon-1.jpg", description: "Transport écologique innovant" },
    { name: "SmartLogistics", logo: "/images/salon-1.jpg", description: "Optimisation logistique avancée" },
    {
        name: "Future Vehicles",
        logo: "/images/salon-1.jpg",
        description: "Véhicules autonomes de nouvelle génération",
    },
]

export default function ExhibitorShowcase() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
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
        <section ref={ref} className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    Découvrez Nos Exposants Phares
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {exhibitors.map((exhibitor, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
                            variants={itemVariants}
                        >
                            <Image
                                src={exhibitor.logo || "/placeholder.svg"}
                                alt={exhibitor.name}
                                width={100}
                                height={100}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-black text-xl font-semibold text-center mb-2">{exhibitor.name}</h3>
                            <p className="text-gray-600 text-center">{exhibitor.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

