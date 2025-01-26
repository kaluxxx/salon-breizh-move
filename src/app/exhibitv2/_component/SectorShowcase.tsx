import Image from "next/image"
import { Truck, Bus, Ambulance, Cog } from "lucide-react"

const sectors = [
  {
    name: "Transport de Marchandises",
    icon: Truck,
    description: "Solutions innovantes pour la logistique et le fret",
  },
  {
    name: "Transport de Voyageurs",
    icon: Bus,
    description: "Mobilité urbaine et interurbaine de nouvelle génération",
  },
  {
    name: "Transport Sanitaire",
    icon: Ambulance,
    description: "Équipements et véhicules pour les services de santé",
  },
  {
    name: "Technologies & Services",
    icon: Cog,
    description: "Innovations technologiques pour tous les secteurs de la mobilité",
  },
]

export default function SectorShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Secteurs Représentés à EUROMOVE</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <sector.icon className="w-16 h-16 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">{sector.name}</h3>
              <p className="text-gray-600 text-center">{sector.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            EUROMOVE réunit les acteurs clés de tous les secteurs de la mobilité pour façonner l'avenir du transport.
          </p>
          <p className="text-lg font-semibold">
            Rejoignez-nous pour présenter vos innovations et connecter avec les leaders de l'industrie !
          </p>
        </div>
      </div>
    </section>
  )
}

