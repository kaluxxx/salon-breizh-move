"use client"

import {motion} from "framer-motion"
import {Card, CardContent} from "@/components/ui/card"
import {Mail, Phone, Calendar} from "lucide-react"
import {useInView} from "react-intersection-observer";

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        content: "presse@euromove.com",
    },
    {
        icon: Phone,
        title: "Téléphone",
        content: "+33 (0)1 23 45 67 89",
    },
    {
        icon: Calendar,
        title: "Horaires",
        content: "Lun-Ven, 9h-18h",
    },
]

export default function PressContactInfo() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
                    transition={{duration: 0.5}}
                    className="text-3xl font-bold text-center mb-12 text-white"
                >
                    Contact presse
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 50}}
                            animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            <Card className="h-full">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <info.icon className="w-12 h-12 text-primary mb-4"/>
                                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                                    <p className="text-muted-foreground">{info.content}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="mt-12 text-center"
                >
                    <p className="text-lg text-white">
                        Notre équipe de relations presse est à votre disposition pour toute demande d'information,
                        d'interview ou de
                        visite personnalisée du salon EUROMOVE.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

