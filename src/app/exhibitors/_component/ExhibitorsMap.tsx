"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"

export default function ExhibitorsMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Plan Interactif des Stands</h2>
          <div className="relative w-full h-[600px]">
            <Image src="/images/exhibitors-map.jpg" alt="Plan des stands" layout="fill" objectFit="contain" />
            {/* Ici, vous pouvez ajouter des éléments interactifs sur la carte */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

