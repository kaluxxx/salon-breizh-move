"use client"

import { motion } from "framer-motion"
import { Clock, Mail, Newspaper, Store, UserRoundIcon as UserRoundPen } from "lucide-react"
import Link from "next/link"

const fastAccessItems = [
  {
    title: "Exposer",
    description: "Réservez votre stand",
    icon: Store,
    link: "/exhibit",
  },
  {
    title: "Visiteurs",
    description: "Obtenez votre badge",
    icon: UserRoundPen,
    link: "/visit",
  },
  {
    title: "Presse",
    description: "Demandez votre accréditation",
    icon: Newspaper,
    link: "/press",
  },
  {
    title: "Infos pratiques",
    description: "Préparez votre venue",
    icon: Clock,
    link: "/practical-infos",
  },
  {
    title: "Contact",
    description: "Contactez-nous",
    icon: Mail,
    link: "/contact",
  },
]

export default function FastAccessSection() {
  return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Accès Rapide</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {fastAccessItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={item.link} className="group">
                    <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon className="w-16 h-16 mb-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
                      <p className="text-sm text-center text-muted-foreground group-hover:text-primary-foreground/80">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

