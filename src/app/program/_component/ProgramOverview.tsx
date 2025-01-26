"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Users, Lightbulb } from "lucide-react"

const overviewItems = [
  {
    icon: Calendar,
    title: "3 jours d'événement",
    description: "Du 1er au 3 juin 2026",
  },
  {
    icon: Clock,
    title: "Plus de 50 sessions",
    description: "Conférences, ateliers et tables rondes",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Rencontrez les acteurs clés du secteur",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Découvrez les dernières avancées technologiques",
  },
]

export default function ProgramOverview() {
  const sectionRef = useRef(null)
  const isSectionInView = useInView(sectionRef, { once: true })

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isSectionInView ? 1 : 0, y: isSectionInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Aperçu du programme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {overviewItems.map((item, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

