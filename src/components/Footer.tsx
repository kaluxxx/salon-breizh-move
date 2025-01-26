"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerChildrenVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
}

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto py-12 px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={staggerChildrenVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {/* À propos */}
                    <motion.div variants={fadeInUpVariants}>
                        <h3 className="text-lg font-semibold mb-4">À propos d'EUROMOVE</h3>
                        <p className="text-sm">
                            EUROMOVE est le salon européen de référence pour l'innovation dans le transport et la mobilité durable.
                            Rejoignez-nous pour façonner l'avenir de la mobilité.
                        </p>
                    </motion.div>

                    {/* Liens rapides */}
                    <motion.div variants={fadeInUpVariants}>
                        <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
                        <ul className="space-y-2">
                            {[
                                { href: "/overview", text: "Le salon" },
                                { href: "/exhibit", text: "Exposer" },
                                { href: "/visit", text: "Visiter" },
                                { href: "/program", text: "Programme" },
                                { href: "/press", text: "Espace presse" },
                                { href: "/contact", text: "Contact" },
                            ].map((link, index) => (
                                <motion.li key={index} variants={fadeInUpVariants}>
                                    <Link href={link.href} className="text-sm hover:underline">
                                        {link.text}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Informations pratiques */}
                    <motion.div variants={fadeInUpVariants}>
                        <h3 className="text-lg font-semibold mb-4">Informations pratiques</h3>
                        <ul className="space-y-2">
                            <motion.li className="flex items-center" variants={fadeInUpVariants}>
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="text-sm">Paris Expo Porte de Versailles</span>
                            </motion.li>
                            <motion.li className="flex items-center" variants={fadeInUpVariants}>
                                <Phone className="w-4 h-4 mr-2" />
                                <a href="tel:+33123456789" className="text-sm hover:underline">
                                    +33 1 23 45 67 89
                                </a>
                            </motion.li>
                            <motion.li className="flex items-center" variants={fadeInUpVariants}>
                                <Mail className="w-4 h-4 mr-2" />
                                <a href="mailto:contact@euromove.com" className="text-sm hover:underline">
                                    contact@euromove.com
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div variants={fadeInUpVariants}>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-sm mb-4">Restez informé des dernières actualités et innovations d'EUROMOVE.</p>
                        <form className="flex flex-col space-y-2">
                            <Input type="email" placeholder="Votre email" className="bg-primary-foreground text-primary" />
                            <Button type="submit" variant="secondary">
                                S'abonner
                            </Button>
                        </form>
                    </motion.div>
                </motion.div>

                {/* Réseaux sociaux et copyright */}
                <motion.div
                    className="mt-8 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center"
                    variants={fadeInUpVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        {[
                            { href: "#", ariaLabel: "Facebook", Icon: Facebook },
                            { href: "#", ariaLabel: "Twitter", Icon: Twitter },
                            { href: "#", ariaLabel: "Instagram", Icon: Instagram },
                            { href: "#", ariaLabel: "LinkedIn", Icon: Linkedin },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                aria-label={social.ariaLabel}
                                className="hover:text-secondary transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.Icon className="w-6 h-6" />
                            </motion.a>
                        ))}
                    </div>
                    <div className="text-sm">© {new Date().getFullYear()} EUROMOVE. Tous droits réservés.</div>
                </motion.div>
            </div>
        </footer>
    )
}

