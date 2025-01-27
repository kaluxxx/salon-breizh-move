"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IntroSection() {
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
        <section
            ref={ref}
            className="relative bg-primary text-white py-20 inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-image.webp')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    className="flex flex-col lg:flex-row items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 lg:leading-tight"
                            variants={itemVariants}
                        >
                            Découvrez le Futur de la Mobilité à EUROMOVE
                        </motion.h1>
                        <motion.p className="text-xl mb-8" variants={itemVariants}>
                            Immergez-vous dans trois jours d'innovation, de networking et d'inspiration.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <Button asChild variant="outline">
                                <Link href="#badge-request">Obtenez votre badge</Link>
                            </Button>
                        </motion.div>
                    </div>
                    <motion.div className="lg:w-1/2" variants={containerVariants}>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { number: "300+", text: "Exposants innovants" },
                                { number: "50+", text: "Conférences exclusives" },
                                { number: "3 jours", text: "D'expériences uniques" },
                                { number: "15,000+", text: "Professionnels attendus" },
                            ].map((item, index) => (
                                <motion.div key={index} className="bg-white/20 p-4 rounded-lg" variants={itemVariants}>
                                    <h3 className="font-bold text-2xl mb-2">{item.number}</h3>
                                    <p>{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

