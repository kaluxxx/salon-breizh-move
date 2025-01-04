import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import LinkButton from "@/components/LinkButton";

interface FastAccessCardProps {
    title: string;
    headerDescription: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    linkText: string;
}

export default function FastAccessCard({
                                           title,
                                           headerDescription,
                                           description,
                                           icon,
                                           link,
                                           linkText
                                       }: FastAccessCardProps) {
    return (
        <Card className="max-w-md h-96 flex flex-col justify-between">
            <CardHeader className="flex flex-col justify-center items-center">
                <CardTitle className="text-3xl">{title}</CardTitle>
                <CardDescription>{headerDescription}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex text-center flex-col items-center space-y-4">
                    {icon}
                    <p>{description}</p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 mb-4">
                <LinkButton href={link} variant="secondary">
                    {linkText}
                </LinkButton>
            </CardFooter>
        </Card>
    )
}