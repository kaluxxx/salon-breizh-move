"use client";

import {Clock, Mail, Newspaper, Store, UserRoundPen} from "lucide-react";
import FastAccessCard from "@/app/_component/FastAccessCard";
import {motion} from "framer-motion";

export default function FastAccessSection() {
    const cardVariants = {
        initial: {opacity: 0, y: 50},
        animate: {opacity: 1, y: 0},
        exit: {opacity: 0, y: 50},
    }

    const fastAccess = [
        {
            title: "Pré-inscriptions",
            headerDescription: "Pré-inscrivez-vous pour participer à l'événement",
            description: "Pré-inscrivez-vous pour participer à l'événement et bénéficiez de nombreux avantages",
            icon: <Store size={100} className="text-secondary"/>,
            link: "/exhibit/exposant",
            linkText: "Pré-inscription",
        },
        {
            title: "Visiteurs",
            headerDescription: "Pré-inscrivez-vous en tant que visiteur",
            description: "Pré-inscrivez-vous en tant que visiteur pour participer à l'événement et bénéficiez de nombreux avantages",
            icon: <UserRoundPen size={100} className="text-secondary"/>,
            link: "/exhibit/visiteur",
            linkText: "Pré-inscription",
        },
        {
            title: "Presse",
            headerDescription: "Demandez votre accréditation presse",
            description: "Demandez votre accréditation presse pour participer à l'événement et bénéficiez de nombreux avantages",
            icon: <Newspaper size={100} className="text-secondary"/>,
            link: "/exhibit/presse",
            linkText: "Demande d'accréditation",
        },
        {
            title: "Infos pratiques",
            headerDescription: "Consultez les informations pratiques",
            description: "Consultez les informations pratiques pour préparer votre venue à l'événement",
            icon: <Clock size={100} className="text-secondary"/>,
            link: "/practical-infos",
            linkText: "En savoir plus",
        },
        {
            title: "Contact",
            headerDescription: "Contactez-nous",
            description: "Contactez-nous pour toute question ou demande d'information",
            icon: <Mail size={100} className="text-secondary"/>,
            link: "/contact",
            linkText: "Nous contacter",
        },
    ];

    return (
        <section className="min-h-screen relative flex flex-col items-center justify-center bg-primary text-white py-16"
                 style={{backgroundImage: "url(/images/salon-1.jpg)", backgroundSize: "cover"}}>
            <div className="absolute inset-0 bg-blue-500 opacity-50"></div>
            <div className="relative container mx-auto px-4">
                <h2 className="text-6xl font-bold text-center">Accès rapide</h2>
                <p className="text-center text-xl">Accédez rapidement aux différentes sections du site</p>
                <div className="flex max-md:flex-col flex-wrap justify-center items-center gap-12 mt-12">
                    {fastAccess.map((access, index) => (
                        <motion.div
                            key={index}
                            initial="initial"
                            animate="animate"
                            variants={cardVariants}
                            transition={{duration: 0.5, delay: index * 0.3}}
                        >
                            <FastAccessCard {...access}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}