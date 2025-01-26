import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselHero() {
    return <Carousel className="lg:max-w-xl 2xl:max-w-4xl w-full h-full mx-auto">
        <CarouselContent>
            <CarouselItem>
                <Image
                    src="/images/camion.jpg"
                    alt="Hero"
                    width={800}
                    height={600}
                    className="w-full h-auto lg:rounded-lg"
                />
            </CarouselItem>
            <CarouselItem>
                <Image
                    src="/images/camion.jpg"
                    alt="Hero"
                    width={800}
                    height={600}
                    className="w-full h-auto lg:rounded-lg"
                />
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden lg:block "/>
        <CarouselNext className="hidden lg:block"/>
    </Carousel>
}