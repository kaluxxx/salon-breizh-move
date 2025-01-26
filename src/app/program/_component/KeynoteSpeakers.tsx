"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const speakers = [
  {
    name: "Dr. Marie Curie",
    role: "Directrice de l'Innovation, EcoMobility",
    image: "/images/avatar.jpg",
    topic: "Révolutionner la mobilité urbaine avec l'IA",
  },
  {
    name: "Prof. Albert Einstein",
    role: "Chercheur en Chef, FutureTech Labs",
    image: "/images/avatar.jpg",
    topic: "L'avenir quantique des transports",
  },
  {
    name: "Amelia Earhart",
    role: "PDG, SkyWay Innovations",
    image: "/images/avatar.jpg",
    topic: "Repousser les limites de l'aviation durable",
  },
  {
    name: "Nikola Tesla",
    role: "Fondateur, ElectroMove",
    image: "/images/avatar.jpg",
    topic: "Électrifier le futur de la mobilité",
  },
]

export default function KeynoteSpeakers() {
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
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Conférenciers principaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{speaker.role}</p>
                  <p className="text-sm font-medium">{speaker.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

