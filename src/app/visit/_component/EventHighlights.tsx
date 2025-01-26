import Image from "next/image"

const highlights = [
    {
        title: "Zone d'Innovation",
        description: "Découvrez les dernières technologies en matière de mobilité durable et intelligente.",
        image: "/images/innovation-zone.jpg",
    },
    {
        title: "Conférences Inspirantes",
        description: "Assistez à des présentations données par des leaders de l'industrie et des visionnaires.",
        image: "/images/conferences.jpg",
    },
    {
        title: "Espace Networking",
        description:
            "Connectez-vous avec des professionnels partageant les mêmes idées et créez de nouvelles opportunités.",
        image: "/images/networking.jpg",
    },
]

export default function EventHighlights() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Les Temps Forts d'EUROMOVE</h2>
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

