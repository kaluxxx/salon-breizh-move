"use client"

import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

const newsItems = [
    { title: "Ouverture des inscriptions pour EUROMOVE 2024", image: "/images/salon-1.jpg" },
    { title: "Les tendances de la mobilité durable à EUROMOVE", image: "/images/salon-1.jpg" },
    { title: "Conférenciers de renom confirmés pour l'événement", image: "/images/salon-1.jpg" },
    { title: "Découvrez les dernières innovations des exposants", image: "/images/salon-1.jpg" },
    { title: "Les startups de la mobilité à l'honneur", image: "/images/salon-1.jpg" },
    { title: "Les grands constructeurs automobiles présents", image: "/images/salon-1.jpg" },
    { title: "Les acteurs de la mobilité urbaine réunis", image: "/images/salon-1.jpg" },
]

function NewsItem({ item, index }: { item: (typeof newsItems)[0]; index: number }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <motion.div
            ref={ref}
            className="h-full p-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="bg-card rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <div className="relative w-full pt-[60%]">
                    <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </motion.div>
    )
}

export default function LatestNewsSection() {
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section ref={sectionRef} className="py-20 bg-muted">
            <div className="container mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    Dernières Actualités
                </motion.h2>
                <div className="px-8 md:px-12">
                    <Carousel opts={{ align: "start", loop: true }} className="w-full">
                        <CarouselContent>
                            {newsItems.map((item, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <NewsItem item={item} index={index} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-6 bg-white hover:bg-primary hover:text-primary-foreground" />
                        <CarouselNext className="absolute -right-6 bg-white hover:bg-primary hover:text-primary-foreground" />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

