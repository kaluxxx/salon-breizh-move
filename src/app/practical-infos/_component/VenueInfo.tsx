"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import {useInView} from "react-intersection-observer";

export default function VenueInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
            animate={ inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-primary"
        >
          Lieu et horaires
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                <Link
                  href="https://www.google.com/maps/place/Parc+des+expositions+de+Rennes/"
                  target="_blank"
                  className="hover:underline text-muted-foreground"
                >
                  Parc des expositions de Rennes,
                  <br />2 La Haie Gautrais, 35170 Bruz
                </Link>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Dates</h3>
                <p className="text-muted-foreground">Du 1er au 3 juin 2026</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Horaires</h3>
                <p className="text-muted-foreground">
                  9h00 - 18h00
                  <br />
                  Tous les jours
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

