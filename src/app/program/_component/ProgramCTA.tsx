"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProgramCTA() {
  const ctaRef = useRef(null)
  const isCtaInView = useInView(ctaRef, { once: true })

  return (
    <section className="py-20 bg-secondary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isCtaInView ? 1 : 0, y: isCtaInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Prêt à rejoindre EUROMOVE 2026 ?</h2>
          <p className="text-xl mb-8">
            Ne manquez pas cette opportunité unique de façonner l'avenir de la mobilité et du transport.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/exhibitv2">Réserver un stand</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

