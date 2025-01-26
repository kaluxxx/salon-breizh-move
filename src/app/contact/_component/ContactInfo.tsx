"use client"

import {motion} from "framer-motion"
import {Phone, Mail, MapPin} from 'lucide-react'
import {useInView} from "react-intersection-observer";

const contactInfo = [
    {icon: Phone, title: "Téléphone", content: "+33 1 23 45 67 89"},
    {icon: Mail, title: "Email", content: "contact@euromove.com"},
    {icon: MapPin, title: "Adresse", content: "Adresse de l'entreprise, 75000 Paris"},
]

export default function ContactInfo() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 50}}
                            animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="bg-white rounded-full p-4 mb-4">
                                <item.icon className="w-12 h-12 text-secondary"/>
                            </div>
                            <h3 className="text-xl text-white font-semibold mb-2">{item.title}</h3>
                            <p className="text-white">{item.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
