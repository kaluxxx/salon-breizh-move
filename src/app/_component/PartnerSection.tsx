import React from 'react';
import {PartnerCarousel} from "@/app/_component/PartnerCarousel";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function PartnerSection() {
    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center px-8 py-12"
            style={{backgroundImage: "url('/images/wave.svg')", backgroundSize: "cover"}}
        >
            <h2 className="text-6xl font-bold text-center mb-4">Partenaires</h2>
            <p className="text-xl mb-2">
                Nous sommes fiers de collaborer avec des leaders de l'industrie
            </p>
            <p className="text-xl mb-8">Ils partagent notre vision d'un avenir plus connecté et durable.</p>
            <PartnerCarousel/>
            <div className="mt-12 text-center max-w-2xl">
                <p className="text-xl mb-4">
                    Découvrez comment nos partenaires jouent un rôle clé dans la transformation du transport
                    et de la logistique.
                </p>
                <Button asChild size="lg" variant="secondary">
                    <Link href="/partenaires" className="text-xl">
                        Voir tous les partenaires
                    </Link>
                </Button>
            </div>
        </section>
    );
}
