import {Clock, Mail, Newspaper, Store, UserRoundPen} from "lucide-react";
import FastAccessCard from "@/app/_component/FastAccessCard";

export default function FastAccessSection() {
    return (
        <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center">Accès rapide</h2>
                <p className="text-center mb-4">Accédez rapidement aux différentes sections du site</p>
                <div className="flex max-md:flex-col flex-wrap justify-center items-center gap-12 mt-8">
                    <FastAccessCard
                        title="Pré-inscriptions"
                        headerDescription="Pré-inscrivez-vous pour participer à l'événement"
                        description="Pré-inscrivez-vous pour participer à l'événement et bénéficiez de nombreux avantages"
                        icon={<Store size={100} className="text-secondary"/>}
                        link="/reservation/exposant"
                        linkText="Pré-inscription"
                    />
                    <FastAccessCard
                        title="Visiteurs"
                        headerDescription="Pré-inscrivez-vous en tant que visiteur"
                        description="Pré-inscrivez-vous en tant que visiteur pour participer à l'événement et bénéficiez de nombreux avantages"
                        icon={<UserRoundPen size={100} className="text-secondary"/>}
                        link="/reservation/visiteur"
                        linkText="Pré-inscription"
                    />
                    <FastAccessCard
                        title="Presse"
                        headerDescription="Demandez votre accréditation presse"
                        description="Demandez votre accréditation presse pour participer à l'événement et bénéficiez de nombreux avantages"
                        icon={<Newspaper size={100} className="text-secondary"/>}
                        link="/reservation/presse"
                        linkText="Demande d'accréditation"
                    />
                    <FastAccessCard
                        title="Infos pratiques"
                        headerDescription="Consultez les informations pratiques"
                        description="Consultez les informations pratiques pour préparer votre venue à l'événement"
                        icon={<Clock size={100} className="text-secondary"/>}
                        link="/infos-pratiques"
                        linkText="En savoir plus"
                    />
                    <FastAccessCard
                        title="Contact"
                        headerDescription="Contactez-nous"
                        description="Contactez-nous pour toute question ou demande d'information"
                        icon={<Mail size={100} className="text-secondary"/>}
                        link="/contact"
                        linkText="Nous contacter"
                    />
                </div>
            </div>
        </section>
    )
}