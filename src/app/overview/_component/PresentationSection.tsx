"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {useInView} from "react-intersection-observer";

export default function PresentationSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} id="presentation" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12 text-primary"
                >
                    Le nouveau rendez-vous du transport
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <p className="text-lg mb-4">
                                    Pour sa première édition, <strong>EUROMOVE</strong> s'annonce comme une plateforme incontournable, célébrant la <strong>diversité
                                    des métiers</strong> et des <strong>solutions</strong> dans le transport – du <strong>sanitaire</strong> à
                                    la <strong>logistique</strong>, en passant par le <strong>transport routier</strong> et
                                    de <strong>voyageurs</strong>.
                                </p>
                                <p className="text-lg">
                                    Avec l'ambition de réunir plus de <strong>300 exposants</strong> venus des quatre coins de l'Europe, nous visons à offrir
                                    un panorama complet des <strong>innovations</strong> et des <strong>défis</strong> à relever
                                    dans chacun de ces domaines, tout en valorisant les <strong>avancées technologiques</strong> qui redéfinissent les standards du
                                    secteur.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Image
                            src="/images/salon-1.jpg"
                            alt="EUROMOVE Salon"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12"
                >
                    <Card>
                        <CardContent className="p-6">
                            <p className="text-lg mb-4">
                                En lançant cet événement, nous souhaitons renforcer les <strong>liens</strong> entre les <strong>acteurs
                                du transport</strong>, accompagner leur transition vers des <strong>solutions plus durables</strong> et contribuer
                                au <strong>rayonnement économique</strong> et <strong>technologique</strong> de la région.
                            </p>
                            <p className="text-lg">
                                <strong>EUROMOVE</strong> se veut plus qu'un simple salon, c'est une <strong>expérience immersive</strong> pensée pour inspirer :
                                nous prévoyons des <strong>conférences engageantes</strong>, des <strong>démonstrations captivantes</strong> et des <strong>ateliers interactifs</strong> qui mettront en lumière
                                les <strong>enjeux</strong> et <strong>opportunités</strong> du transport de demain. Que vous soyez <strong>professionnel</strong>, <strong>constructeur</strong> ou passionné
                                de <strong>mobilité</strong>, cet événement inaugural est conçu pour vous offrir une <strong>vision globale</strong> et enrichissante de l'avenir du secteur.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
