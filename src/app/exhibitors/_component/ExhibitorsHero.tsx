"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function ExhibitorsHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-image.webp')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Nos Exposants</h1>
          <p className="text-xl sm:text-2xl">
            Découvrez les leaders et innovateurs de l'industrie du transport et de la mobilité
          </p>
        </motion.div>
      </div>
    </section>
  )
}

