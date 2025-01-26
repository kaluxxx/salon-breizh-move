import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FastAccessCardProps {
  title: string
  headerDescription: string
  description: string
  icon: React.ReactNode
  link: string
  linkText: string
}

export default function FastAccessCard({
  title,
  headerDescription,
  description,
  icon,
  link,
  linkText,
}: FastAccessCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between hover:shadow-lg transition duration-300">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{headerDescription}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={link}>{linkText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

