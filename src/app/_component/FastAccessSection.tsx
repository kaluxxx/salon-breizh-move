"use client"

import { motion } from "framer-motion"
import { Clock, Mail, Newspaper, Store, UserRoundIcon as UserRoundPen } from "lucide-react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

const fastAccessItems = [
  {
    title: "Exposer",
    description: "Réservez votre stand",
    icon: Store,
    link: "/exhibitv2",
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

function FastAccessItem({
                          item,
                          index,
                          className,
                        }: { item: (typeof fastAccessItems)[0]; index: number; className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
      <motion.div
          ref={ref}
          className={className}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Link href={item.link} className="group block h-full">
          <div className="flex flex-col items-center justify-between h-full p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary group-hover:text-primary-foreground">
            <item.icon className="w-16 h-16 mb-4 text-primary group-hover:text-primary-foreground transition-all duration-300" />
            <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
            <p className="text-sm text-center text-gray-600 group-hover:text-primary-foreground/90">{item.description}</p>
          </div>
        </Link>
      </motion.div>
  )
}

export default function FastAccessSection() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
      <section ref={sectionRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
          >
            Accès Rapide
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:flex md:flex-wrap md:justify-center">
            {fastAccessItems.map((item, index) => (
                <FastAccessItem key={index} item={item} index={index} className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6" />
            ))}
          </div>
        </div>
      </section>
  )
}

