"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, MapPin } from "lucide-react"

const thematicTracks = {
  "Mobilité Urbaine": [
    { title: "L'avenir des transports en commun", time: "1er Juin, 10:30", location: "Salle A" },
    { title: "Solutions de micro-mobilité", time: "2 Juin, 14:00", location: "Hall Innovation" },
    { title: "Table ronde : Défis du dernier kilomètre", time: "3 Juin, 11:00", location: "Auditorium" },
  ],
  "Transport Durable": [
    { title: "Véhicules électriques : état des lieux", time: "1er Juin, 14:00", location: "Salle B" },
    { title: "L'hydrogène dans les transports", time: "2 Juin, 11:30", location: "Laboratoire Futur" },
    { title: "Logistique verte pour les entreprises", time: "3 Juin, 15:30", location: "Espace Pro" },
  ],
  "Technologies Émergentes": [
    { title: "IA et conduite autonome", time: "1er Juin, 16:00", location: "Salle Innovation" },
    { title: "Blockchain dans la gestion de flotte", time: "2 Juin, 09:30", location: "Salle C" },
    { title: "5G et connectivité des véhicules", time: "3 Juin, 14:00", location: "Lab Connecté" },
  ],
  "Politique et Réglementation": [
    { title: "Nouvelles normes européennes de mobilité", time: "1er Juin, 11:00", location: "Salle Conférence" },
    { title: "Table ronde : Régulation des nouvelles mobilités", time: "2 Juin, 15:30", location: "Auditorium" },
    { title: "Incitations gouvernementales pour le transport vert", time: "3 Juin, 10:00", location: "Espace Débat" },
  ],
}

export default function ThematicTracks() {
  const [activeTab, setActiveTab] = useState(Object.keys(thematicTracks)[0])
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
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Parcours Thématiques</h2>
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-primary">
              {Object.keys(thematicTracks).map((track) => (
                <TabsTrigger key={track} value={track} className="text-sm text-white">
                  {track}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(thematicTracks).map(([track, events]) => (
              <TabsContent key={track} value={track}>
                <div className="grid gap-4">
                  {events.map((event, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <CalendarDays className="mr-2 h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

