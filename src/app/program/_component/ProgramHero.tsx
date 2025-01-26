"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProgramHero() {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })
  const isDescriptionInView = useInView(descriptionRef, { once: true })
  const isButtonInView = useInView(buttonRef, { once: true })

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-image.webp')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isTitleInView ? 1 : 0, y: isTitleInView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Programme EUROMOVE 2026
        </motion.h1>
        <motion.p
          ref={descriptionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isDescriptionInView ? 1 : 0, y: isDescriptionInView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl mb-8"
        >
          Découvrez les temps forts de l'événement incontournable du transport et de la mobilité durable
        </motion.p>
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isButtonInView ? 1 : 0, scale: isButtonInView ? 1 : 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" variant="secondary">
            <Link href="#schedule">Voir le programme détaillé</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

