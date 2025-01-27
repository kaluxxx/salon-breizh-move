"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <section ref={ref} className="relative bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
                className="w-full xl:w-1/2 mb-10 lg:mb-0"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:leading-tight">
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
                  <Link href="/exhibitv2">Exposer</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
                className="w-full xl:w-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                  src="/images/hero-image.webp"
                  alt="EUROMOVE Salon"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
  )
}
