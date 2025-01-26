"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"

const pressInfo = [
  {
    icon: Calendar,
    title: "Dates",
    content: "Du 1er au 3 juin 2026",
  },
  {
    icon: MapPin,
    title: "Lieu",
    content: "Parc des expositions de Rennes",
  },
  {
    icon: Users,
    title: "Participants",
    content: "Plus de 300 exposants et 15,000 visiteurs attendus",
  },
]

export default function PressInfo() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-primary"
        >
          Informations clés
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <info.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

