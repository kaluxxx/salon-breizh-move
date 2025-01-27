"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for exhibitors
const exhibitors = [
  { id: 1, name: "EcoMobility", category: "Véhicules Électriques", stand: "A1" },
  { id: 2, name: "SmartTransit", category: "Transport Public", stand: "B3" },
  { id: 3, name: "AeroTech", category: "Aviation", stand: "C2" },
  { id: 4, name: "GreenLogistics", category: "Logistique", stand: "D4" },
  { id: 5, name: "UrbanMicro", category: "Micro-mobilité", stand: "E1" },
  { id: 6, name: "HydrogenFuture", category: "Hydrogène", stand: "F2" },
]

const categories = [
  "Tous",
  "Véhicules Électriques",
  "Transport Public",
  "Aviation",
  "Logistique",
  "Micro-mobilité",
  "Hydrogène",
]

export default function ExhibitorsFilter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [filteredExhibitors, setFilteredExhibitors] = useState(exhibitors)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleSearch = () => {
    const filtered = exhibitors.filter(
        (exhibitor) =>
            exhibitor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === "Tous" || exhibitor.category === selectedCategory),
    )
    setFilteredExhibitors(filtered)
  }

  return (
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Input
                  type="text"
                  placeholder="Rechercher un exposant..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow"
              />
              <Select onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={handleSearch}>
                <Search className="w-4 h-4 mr-2" />
                Filtrer
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredExhibitors.map((exhibitor) => (
                  <Card
                      key={exhibitor.id}
                      className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold">{exhibitor.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          Stand: {exhibitor.stand}
                        </Badge>
                      </div>
                      <Badge className="self-start mb-4">{exhibitor.category}</Badge>
                      <p className="text-sm text-muted-foreground mt-auto">
                        Découvrez les innovations de {exhibitor.name} dans le domaine {exhibitor.category.toLowerCase()}.
                      </p>
                      <div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  )
}

