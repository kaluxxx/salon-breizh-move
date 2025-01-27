"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, TrendingUp, Globe } from "lucide-react"
import { useInView } from "react-intersection-observer"

const highlights = [
  {
    icon: Users,
    title: "15,000+ Visiteurs",
    description: "Professionnels et décideurs du secteur",
  },
  {
    icon: Lightbulb,
    title: "300+ Exposants",
    description: "Présentant les dernières innovations",
  },
  {
    icon: TrendingUp,
    title: "50+ Conférences",
    description: "Sur les tendances et l'avenir de la mobilité",
  },
  {
    icon: Globe,
    title: "Networking Global",
    description: "Opportunités de partenariats internationaux",
  },
]

function HighlightItem({ highlight, index }: { highlight: (typeof highlights)[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
      <motion.div
          ref={ref}
          className="bg-card text-card-foreground rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <highlight.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-center mb-2">{highlight.title}</h3>
        <p className="text-muted-foreground text-center">{highlight.description}</p>
      </motion.div>
  )
}

export default function EventHighlights() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
      <section ref={sectionRef} className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
          >
            Points Forts d'EUROMOVE
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
                <HighlightItem key={index} highlight={highlight} index={index} />
            ))}
          </div>
        </div>
      </section>
  )
}

