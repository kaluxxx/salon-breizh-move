"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const specialEvents = [
  {
    title: "Lancement de la voiture autonome XYZ",
    description:
      "Soyez les premiers à découvrir la nouvelle voiture autonome de XYZ Motors, une révolution dans le transport urbain.",
    date: "1er Juin, 11h00",
    location: "Hall Principal",
    type: "Démonstration",
  },
  {
    title: "Cocktail Networking: Mobilité Durable",
    description:
      "Rencontrez les leaders de l'industrie et échangez sur les dernières innovations en matière de mobilité durable.",
    date: "2 Juin, 18h30",
    location: "Espace VIP",
    type: "Networking",
  },
  {
    title: "Hackathon: Solutions de Transport Intelligent",
    description:
      "Participez à notre hackathon de 24h et développez des solutions innovantes pour les défis de transport urbain.",
    date: "2-3 Juin",
    location: "Salle Innovation",
    type: "Compétition",
  },
  {
    title: "Table Ronde: L'Avenir des Transports Publics",
    description:
      "Experts et décideurs discutent des tendances et défis futurs pour les transports publics dans les grandes métropoles.",
    date: "3 Juin, 14h00",
    location: "Auditorium",
    type: "Conférence",
  },
]

export default function SpecialEvents() {
  const sectionRef = useRef(null)
  const isSectionInView = useInView(sectionRef, { once: true })

  return (
    <section ref={sectionRef} className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isSectionInView ? 1 : 0, y: isSectionInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Événements Spéciaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialEvents.map((event, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{event.title}</span>
                    <Badge variant="secondary">{event.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

