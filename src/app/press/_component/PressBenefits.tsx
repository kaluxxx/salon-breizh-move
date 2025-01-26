"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Newspaper, Camera, Mic, Coffee } from "lucide-react"

const benefits = [
  {
    icon: Newspaper,
    title: "Accès exclusif",
    description: "Accédez à des zones réservées à la presse pour des interviews et des reportages exclusifs.",
  },
  {
    icon: Camera,
    title: "Séances photo dédiées",
    description: "Profitez de séances photo spéciales avec les exposants et les innovations présentées.",
  },
  {
    icon: Mic,
    title: "Conférences de presse",
    description: "Assistez à des conférences de presse exclusives avec les leaders de l'industrie.",
  },
  {
    icon: Coffee,
    title: "Espace presse",
    description: "Bénéficiez d'un espace de travail dédié avec Wi-Fi, rafraîchissements et support technique.",
  },
]

export default function PressBenefits() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Avantages pour la presse
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

