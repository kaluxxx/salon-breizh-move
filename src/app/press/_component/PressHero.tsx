"use client"

import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import Link from "next/link"
import {useInView} from "react-intersection-observer";

export default function PressHero() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: "url('/images/hero-image.webp')"}}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"/>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                <motion.h1
                    initial={{opacity: 0, y: -50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: -50}}
                    transition={{duration: 0.5}}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:leading-tight"
                >
                    Espace Presse EUROMOVE
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="text-xl sm:text-2xl mb-8"
                >
                    Découvrez l'innovation dans le transport et la mobilité durable
                </motion.p>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={inView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.5}}
                    transition={{duration: 0.5, delay: 0.4}}
                >
                    <Button asChild size="lg" variant="secondary">
                        <Link href="#accreditation">Demander une accréditation</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

