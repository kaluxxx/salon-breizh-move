import Image from "next/image"

const highlights = [
    {
        title: "Visibilité Maximale",
        description: "Présentez vos produits et services à plus de 15 000 professionnels du secteur.",
        image: "/images/salon-1.jpg",
    },
    {
        title: "Networking Ciblé",
        description: "Rencontrez des décideurs clés et établissez des partenariats stratégiques.",
        image: "/images/salon-1.jpg",
    },
    {
        title: "Innovation Showcase",
        description: "Démontrez vos dernières innovations dans un environnement dédié à la mobilité du futur.",
        image: "/images/salon-1.jpg",
    },
]

export default function ExhibitorHighlights() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Exposer à EUROMOVE ?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={highlight.image || "/placeholder.svg"}
                                alt={highlight.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{highlight.title}</h3>
                                <p className="text-gray-700">{highlight.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

