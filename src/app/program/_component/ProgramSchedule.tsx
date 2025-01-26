"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

const scheduleData = {
  "1er Juin": [
    { time: "09:00 - 10:00", title: "Cérémonie d'ouverture", speaker: "Marie Dupont, Présidente d'EUROMOVE" },
    { time: "10:30 - 11:30", title: "L'avenir de la mobilité électrique", speaker: "Dr. Jean Martin, Tesla" },
    { time: "13:00 - 14:00", title: "Pause déjeuner et networking", speaker: "" },
    { time: "14:30 - 15:30", title: "Table ronde : Défis du transport urbain", speaker: "Panel d'experts" },
    { time: "16:00 - 17:00", title: "Innovation dans les transports publics", speaker: "Sophie Leroux, RATP" },
  ],
  "2 Juin": [
    { time: "09:30 - 10:30", title: "Mobilité partagée : tendances et opportunités", speaker: "Luc Dubois, Uber" },
    {
      time: "11:00 - 12:00",
      title: "L'hydrogène : carburant du futur ?",
      speaker: "Prof. Emma White, Université de Paris",
    },
    { time: "13:30 - 14:30", title: "Pause déjeuner et démonstrations", speaker: "" },
    { time: "15:00 - 16:00", title: "Smart Cities et mobilité connectée", speaker: "Alexandre Chen, Siemens" },
    { time: "16:30 - 17:30", title: "Atelier : Conception de véhicules autonomes", speaker: "Équipe Waymo" },
  ],
  "3 Juin": [
    { time: "09:00 - 10:00", title: "Mobilité durable et changement climatique", speaker: "Dr. Amelia Green, ONU" },
    {
      time: "10:30 - 11:30",
      title: "L'avenir de l'aviation : plus vert, plus intelligent",
      speaker: "Carlos Rodriguez, Airbus",
    },
    { time: "13:00 - 14:00", title: "Pause déjeuner et sessions de networking", speaker: "" },
    { time: "14:30 - 15:30", title: "Révolution de la logistique urbaine", speaker: "Yuki Tanaka, Amazon" },
    {
      time: "16:00 - 17:00",
      title: "Cérémonie de clôture et perspectives d'avenir",
      speaker: "Marie Dupont, Présidente d'EUROMOVE",
    },
  ],
}

export default function ProgramSchedule() {
  const titleRef = useRef(null)
  const scheduleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })
  const isScheduleInView = useInView(scheduleRef, { once: true })

  return (
    <section id="schedule" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isTitleInView ? 1 : 0, y: isTitleInView ? 0 : -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Programme détaillé
        </motion.h2>
        <motion.div
          ref={scheduleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isScheduleInView ? 1 : 0, y: isScheduleInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(scheduleData).map(([date, events], index) => (
              <AccordionItem key={date} value={`item-${index}`}>
                <AccordionTrigger className="text-white text-xl font-semibold">{date}</AccordionTrigger>
                <AccordionContent>
                  {events.map((event, eventIndex) => (
                    <Card key={eventIndex} className="mb-4">
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                          <div className="mb-2 md:mb-0">
                            <p className="font-semibold text-primary">{event.time}</p>
                            <h3 className="text-lg font-bold">{event.title}</h3>
                          </div>
                          {event.speaker && <p className="text-sm text-muted-foreground">{event.speaker}</p>}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

