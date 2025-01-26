import { Briefcase, PresentationIcon as PresentationChart, HandshakeIcon } from "lucide-react"

const guideContent = [
    {
        title: "Préparez votre participation",
        icon: Briefcase,
        content: [
            "Définissez vos objectifs de participation",
            "Préparez vos supports de communication",
            "Formez votre équipe sur place",
        ],
    },
    {
        title: "Maximisez votre présence",
        icon: PresentationChart,
        content: [
            "Organisez des démonstrations de produits",
            "Participez aux conférences et tables rondes",
            "Utilisez les outils de promotion d'EUROMOVE",
        ],
    },
    {
        title: "Suivez vos contacts",
        icon: HandshakeIcon,
        content: [
            "Collectez efficacement les contacts",
            "Planifiez vos actions post-salon",
            "Mesurez votre retour sur investissement",
        ],
    },
]

export default function ExhibitorGuide() {
    return (
        <section className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Guide de l'Exposant EUROMOVE</h2>
                <div className="grid md:grid-cols-3 gap-8 text-black">
                    {guideContent.map((category, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <category.icon className="w-8 h-8 text-secondary mr-3" />
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {category.content.map((item, index) => (
                                    <li key={index} className="flex items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold mr-3">
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

