"use client"

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import * as React from "react";

export default function LastNewsCarousel() {
    return (
        <Carousel opts={{align: "start", loop: true}} className="w-5/6 mx-auto mt-8">
            <CarouselContent>
                {Array.from({length: 24}).map((_, index) => (
                    <CarouselItem key={index} className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col w-full md:w-1/3">
                            <div className="flex-1 flex flex-col gap-4">
                                <div className="h-64 bg-white rounded-lg"/>
                                <div className="h-64 bg-white rounded-lg"/>
                                <div className="h-64 bg-white rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col md:w-2/3 gap-4">
                            <div className="flex-1 bg-white rounded-lg"/>
                            <div className="flex-1 bg-white rounded-lg"/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}