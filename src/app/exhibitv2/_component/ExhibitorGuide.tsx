"use client"

import {Briefcase, PresentationIcon as PresentationChart, HandshakeIcon} from "lucide-react"
import {motion, useInView} from "framer-motion"
import {useRef} from "react"

const guideContent = [
    {
        title: "Préparez votre participation",
        icon: Briefcase,
        content: [
            "Définissez vos objectifs de participation",
            "Préparez vos supports de communication",
            "Formez votre équipe sur place",
        ],
    },
    {
        title: "Maximisez votre présence",
        icon: PresentationChart,
        content: [
            "Organisez des démonstrations de produits",
            "Participez aux conférences et tables rondes",
            "Utilisez les outils de promotion d'EUROMOVE",
        ],
    },
    {
        title: "Suivez vos contacts",
        icon: HandshakeIcon,
        content: [
            "Collectez efficacement les contacts",
            "Planifiez vos actions post-salon",
            "Mesurez votre retour sur investissement",
        ],
    },
]

export default function ExhibitorGuide() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, amount: 0.3})

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5},
        },
    }

    return (
        <section ref={ref} className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{opacity: 0, y: -20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
                    transition={{duration: 0.5}}
                >
                    Guide de l'Exposant EUROMOVE
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-3 gap-8 text-black"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {guideContent.map((category, idx) => (
                        <motion.div key={idx} className="bg-gray-50 rounded-lg shadow-md p-6" variants={itemVariants}>
                            <div className="flex items-center mb-4">
                                <category.icon className="w-8 h-8 text-secondary mr-3"/>
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {category.content.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start"
                                        initial={{opacity: 0, x: -20}}
                                        animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -20}}
                                        transition={{duration: 0.5, delay: 0.1 * index}}
                                    >
                    <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold mr-3">
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

