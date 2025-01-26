import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";

interface ReasonCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

export default function ReasonCard({title, description, imageSrc, imageAlt}: ReasonCardProps) {
    return (
        <Card className="text-center flex flex-col items-center justify-between">
            <CardHeader className="gap-4 flex-1">
                <CardTitle className="text-secondary text-4xl">{title}</CardTitle>
                <CardDescription className="relative h-72">
                    <Image src={imageSrc} fill className="w-72 h-72" alt={imageAlt}/>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-lg">{description}</p>
            </CardContent>
        </Card>
    )
}