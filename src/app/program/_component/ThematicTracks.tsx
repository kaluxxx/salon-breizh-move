"use client"

import {useState, useRef} from "react"
import {motion, useInView, AnimatePresence} from "framer-motion"
import {Card, CardContent} from "@/components/ui/card"
import {CalendarDays, MapPin, ChevronRight, ChevronDown} from "lucide-react"

type Event = {
    title: string
    time: string
    location: string
}

type ThematicTracks = {
    [key: string]: Event[]
}

const thematicTracks: ThematicTracks = {
    "Mobilité Urbaine": [
        {title: "L'avenir des transports en commun", time: "1er Juin, 10:30", location: "Salle A"},
        {title: "Solutions de micro-mobilité", time: "2 Juin, 14:00", location: "Hall Innovation"},
        {title: "Table ronde : Défis du dernier kilomètre", time: "3 Juin, 11:00", location: "Auditorium"},
    ],
    "Transport Durable": [
        {title: "Véhicules électriques : état des lieux", time: "1er Juin, 14:00", location: "Salle B"},
        {title: "L'hydrogène dans les transports", time: "2 Juin, 11:30", location: "Laboratoire Futur"},
        {title: "Logistique verte pour les entreprises", time: "3 Juin, 15:30", location: "Espace Pro"},
    ],
    "Technologies Émergentes": [
        {title: "IA et conduite autonome", time: "1er Juin, 16:00", location: "Salle Innovation"},
        {title: "Blockchain dans la gestion de flotte", time: "2 Juin, 09:30", location: "Salle C"},
        {title: "5G et connectivité des véhicules", time: "3 Juin, 14:00", location: "Lab Connecté"},
    ],
    "Politique et Réglementation": [
        {title: "Nouvelles normes européennes de mobilité", time: "1er Juin, 11:00", location: "Salle Conférence"},
        {title: "Table ronde : Régulation des nouvelles mobilités", time: "2 Juin, 15:30", location: "Auditorium"},
        {title: "Incitations gouvernementales pour le transport vert", time: "3 Juin, 10:00", location: "Espace Débat"},
    ],
}

export default function ThematicTracks() {
    const [activeTrack, setActiveTrack] = useState(Object.keys(thematicTracks)[0])
    const sectionRef = useRef(null)
    const isSectionInView = useInView(sectionRef, {once: true})

    return (
        <section ref={sectionRef} className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: isSectionInView ? 1 : 0, y: isSectionInView ? 0 : 50}}
                    transition={{duration: 0.5}}
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary">Parcours Thématiques</h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <div className="space-y-4">
                                {Object.keys(thematicTracks).map((track) => (
                                    <motion.button
                                        key={track}
                                        className={`w-full text-left p-4 rounded-lg transition-colors ${
                                            activeTrack === track ? "bg-primary text-white" : "bg-white hover:bg-primary/10"
                                        }`}
                                        onClick={() => setActiveTrack(track)}
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">{track}</span>
                                            {activeTrack === track ?
                                                <ChevronRight className="h-5 w-5 text-white"/> :
                                                <ChevronDown className="h-5 w-5 text-primary"/>
                                            }
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTrack}
                                    initial={{opacity: 0, x: 50}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -50}}
                                    transition={{duration: 0.3}}
                                >
                                    <div className="space-y-4">
                                        {thematicTracks[activeTrack as keyof ThematicTracks].map((event, index) => (
                                            <Card key={index}>
                                                <CardContent className="p-4">
                                                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                                                    <div
                                                        className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                                        <div className="flex items-center">
                                                            <CalendarDays className="mr-2 h-4 w-4"/>
                                                            <span>{event.time}</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <MapPin className="mr-2 h-4 w-4"/>
                                                            <span>{event.location}</span>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

