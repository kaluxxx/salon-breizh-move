"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExhibitorsCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-secondary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Rejoignez EUROMOVE 2026 en tant qu'Exposant</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Présentez vos innovations en matière de transport et de mobilité à un public international de professionnels
            et de décideurs.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/exhibitv2">Devenir Exposant</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

