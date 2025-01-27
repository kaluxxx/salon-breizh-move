"use client"

import { Truck, Bus, Ambulance, Cog } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const sectors = [
    {
        name: "Transport de Marchandises",
        icon: Truck,
        description: "Solutions innovantes pour la logistique et le fret",
    },
    {
        name: "Transport Routier",
        icon: Cog,
        description: "Sécurité, efficacité et durabilité dans le transport routier",
    },
    {
        name: "Transport de Voyageurs",
        icon: Bus,
        description: "Mobilité urbaine et interurbaine de nouvelle génération",
    },
    {
        name: "Transport Sanitaire",
        icon: Ambulance,
        description: "Équipements et véhicules pour les services de santé",
    },
]

export default function SectorShowcase() {
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
        <section ref={ref} className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    Secteurs Représentés à EUROMOVE
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
                            variants={itemVariants}
                        >
                            <sector.icon className="w-16 h-16 text-primary mb-4" />
                            <h3 className="text-black text-xl font-semibold text-center mb-2">{sector.name}</h3>
                            <p className="text-gray-600 text-center">{sector.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <p className="text-lg mb-4">
                        EUROMOVE réunit les acteurs clés de tous les secteurs de la mobilité pour façonner l'avenir du transport.
                    </p>
                    <p className="text-lg font-semibold">
                        Rejoignez-nous pour présenter vos innovations et connecter avec les leaders de l'industrie !
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

