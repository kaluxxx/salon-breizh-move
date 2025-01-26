import Image from "next/image"

const exhibitors = [
    { name: "TechMobility", logo: "/images/salon-1.jpg", description: "Solutions de mobilité intelligente" },
    { name: "GreenTransit", logo: "/images/salon-1.jpg", description: "Transport écologique innovant" },
    { name: "SmartLogistics", logo: "/images/salon-1.jpg", description: "Optimisation logistique avancée" },
    {
        name: "Future Vehicles",
        logo: "/images/salon-1.jpg",
        description: "Véhicules autonomes de nouvelle génération",
    },
]

export default function ExhibitorShowcase() {
    return (
        <section className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Découvrez Nos Exposants Phares</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {exhibitors.map((exhibitor, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                            <Image
                                src={exhibitor.logo || "/placeholder.svg"}
                                alt={exhibitor.name}
                                width={100}
                                height={100}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-black text-xl font-semibold text-center mb-2">{exhibitor.name}</h3>
                            <p className="text-gray-600 text-center">{exhibitor.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

