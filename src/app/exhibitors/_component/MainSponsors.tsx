"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const sponsors = [
  { id: 1, name: "TechMobility", logo: "/images/techmobility-logo.png" },
  { id: 2, name: "GreenDrive", logo: "/images/greendrive-logo.png" },
  { id: 3, name: "FutureTrans", logo: "/images/futuretrans-logo.png" },
  { id: 4, name: "EcoLogistics", logo: "/images/ecologistics-logo.png" },
]

export default function MainSponsors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Nos Sponsors Principaux</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.id} className="overflow-hidden">
                <CardContent className="p-4 flex items-center justify-center h-40">
                  <div className="relative w-full h-full">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      layout="fill"
                      objectFit="contain"
                    />
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

