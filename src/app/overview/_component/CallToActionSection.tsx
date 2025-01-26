"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {useInView} from "react-intersection-observer";

export default function CallToActionSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-6"
                >
                    Soyez Pionnier de la Première Édition d'EUROMOVE
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl mb-8"
                >
                    Rejoignez-nous pour cette édition inaugurale et soyez au cœur de l'innovation dans le transport.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/exhibit">Participer à EUROMOVE</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

