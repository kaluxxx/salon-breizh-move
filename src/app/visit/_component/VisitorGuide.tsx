import { Calendar, Users, Lightbulb } from "lucide-react"

const guideContent = [
    {
        title: "Avant votre visite",
        icon: Calendar,
        content: [
            "Planifiez votre itinéraire et vos objectifs",
            "Consultez la liste des exposants et marquez vos favoris",
            "Accédez à la plateforme pour préparer votre visite",
        ],
    },
    {
        title: "Pendant le salon",
        icon: Users,
        content: [
            "Participez aux démonstrations en direct",
            "Assistez aux conférences qui vous intéressent",
            "Utilisez l'espace networking pour des rencontres ciblées",
        ],
    },
    {
        title: "Après l'événement",
        icon: Lightbulb,
        content: [
            "Suivez les contacts établis pendant le salon",
            "Partagez vos découvertes avec votre équipe",
            "Restez informé des futures éditions d'EUROMOVE",
        ],
    },
]

export default function VisitorGuide() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Guide du Visiteur EUROMOVE</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {guideContent.map((category, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <category.icon className="w-8 h-8 text-primary mr-3" />
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {category.content.map((item, index) => (
                                    <li key={index} className="flex items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

