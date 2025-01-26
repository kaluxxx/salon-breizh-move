"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              EUROMOVE : Le Futur du Transport et de la Mobilité Durable
            </h1>
            <p className="text-xl mb-8">
              Rejoignez le rendez-vous incontournable des leaders de l'industrie pour façonner l'avenir de la mobilité.
            </p>
            <div className="flex space-x-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/overview">Découvrir</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/exhibit">Exposer</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/hero-image.webp"
              alt="EUROMOVE Salon"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

