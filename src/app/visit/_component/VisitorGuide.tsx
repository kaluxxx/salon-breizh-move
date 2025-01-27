"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Users, Lightbulb } from "lucide-react"

const guideContent = [
    {
        title: "Avant votre visite",
        icon: Calendar,
        content: [
            "Planifiez votre itinéraire et vos objectifs",
            "Consultez la liste des exposants et marquez vos favoris",
            "Accédez à la plateforme pour préparer votre visite",
        ],
    },
    {
        title: "Pendant le salon",
        icon: Users,
        content: [
            "Participez aux démonstrations en direct",
            "Assistez aux conférences qui vous intéressent",
            "Utilisez l'espace networking pour des rencontres ciblées",
        ],
    },
    {
        title: "Après l'événement",
        icon: Lightbulb,
        content: [
            "Suivez les contacts établis pendant le salon",
            "Partagez vos découvertes avec votre équipe",
            "Restez informé des futures éditions d'EUROMOVE",
        ],
    },
]

export default function VisitorGuide() {
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
        <section ref={ref} className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    Guide du Visiteur EUROMOVE
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-3 gap-8 text-black"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {guideContent.map((category, idx) => (
                        <motion.div key={idx} className="bg-white rounded-lg shadow-md p-6" variants={itemVariants}>
                            <div className="flex items-center mb-4">
                                <category.icon className="w-8 h-8 text-primary mr-3" />
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {category.content.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                    >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                                        <span className="text-sm">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

