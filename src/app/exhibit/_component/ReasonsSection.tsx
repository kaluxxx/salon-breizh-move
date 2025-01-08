import LinkButton from "@/components/LinkButton";
import ReasonCard from "@/app/exhibit/_component/ReasonCard";

export default function ReasonsSection() {
    const reasons = [
        {
            title: "Rencontrez vos futurs partenaires",
            description: "Profitez d’un environnement propice à la rencontre et à l’échange pour développer votre réseau et identifier de nouvelles opportunités de collaboration.",
            imageSrc: "/svg/partner.svg",
            imageAlt: "Partners"
        },
        {
            title: "Valorisez votre expertise",
            description: "Partagez vos connaissances et votre savoir-faire avec une audience qualifiée et intéressée par vos solutions innovantes. Profitez d’un cadre unique pour mettre en avant votre expertise.",
            imageSrc: "/svg/experts.svg",
            imageAlt: "Partners"
        },
        {
            title: "Développez votre visibilité",
            description: "Profitez d’une plateforme de communication unique pour mettre en avant vos produits et services et renforcer votre positionnement sur le marché. Gagnez en visibilité et en notoriété.",
            imageSrc: "/svg/work-chat.svg",
            imageAlt: "Partners"
        }
    ];

    return (
        <section className="flex flex-col gap-8 my-8 container mx-auto">
            <h2 className="text-primary text-4xl font-bold">3 raisons d’exposer à Euromove</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                    <ReasonCard title={reason.title} description={reason.description} imageSrc={reason.imageSrc}
                                imageAlt={reason.imageAlt} key={index}/>
                ))}
            </div>
            <LinkButton className="bg-secondary text-white w-fit mx-auto" href='/#pre-register' size="lg">
                Je souhaite exposer
            </LinkButton>
        </section>
    )
}