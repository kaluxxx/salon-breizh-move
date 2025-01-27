"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import BadgeRequestForm from "@/app/visit/_component/BadgeRequestForm"

export default function BadgeRequestSection() {
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

    const benefits = ["Accès aux 3 jours du salon", "Participation aux conférences", "Accès à l'espace networking"]

    return (
        <section ref={ref} className="py-20 bg-gray-100 text-black" id="badge-request">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div variants={itemVariants}>
                        <motion.h2
                            className="text-3xl font-bold mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            Obtenez Votre Badge Visiteur Gratuit
                        </motion.h2>
                        <motion.p className="text-lg mb-4" variants={itemVariants}>
                            Ne manquez pas cette opportunité unique de découvrir les innovations qui façonneront l'avenir de la
                            mobilité.
                        </motion.p>
                        <motion.ul
                            className="space-y-2 mb-6"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {benefits.map((benefit, index) => (
                                <motion.li key={index} className="flex items-center" variants={itemVariants}>
                                    <Check className="w-5 h-5 mr-2 text-green-500" />
                                    {benefit}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                    <motion.div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg" variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-4">Demandez votre badge</h3>
                        <BadgeRequestForm />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

