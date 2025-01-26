"use client"

import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

const newsItems = [
  { title: "Ouverture des inscriptions pour EUROMOVE 2024", image: "/images/salon-1.jpg" },
  { title: "Les tendances de la mobilité durable à EUROMOVE", image: "/images/salon-1.jpg" },
  { title: "Conférenciers de renom confirmés pour l'événement", image: "/images/salon-1.jpg" },
  { title: "Nouvelle zone d'innovation pour les startups", image: "/images/salon-1.jpg" },
]

export default function LatestNewsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-center mb-12">Dernières Actualités</h2>
        </motion.div>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {newsItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <motion.div
                  className="p-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-card rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">Lire la suite...</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

