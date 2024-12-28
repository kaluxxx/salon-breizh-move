"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {Card, CardContent} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function PartnerCarousel() {
    const plugin = React.useRef(
        Autoplay({delay: 2000, stopOnInteraction: true})
    )

    return (
        <Carousel
            opts={{align: "start", loop: true}}
            plugins={[plugin.current]}
            className="w-full mt-8"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="-ml-1">
                {Array.from({length: 24}).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}
