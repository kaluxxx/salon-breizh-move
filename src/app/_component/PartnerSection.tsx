import React from 'react';
import {PartnerCarousel} from "@/app/_component/PartnerCarousel";

export default function PartnerSection() {
    return (
        <section className="bg-secondary text-white py-16">
            <div className="container mx-auto px-16 md:px-4">
                <h2 className="text-3xl font-bold text-center">Partenaires</h2>
                <p className="text-center">Nos partenaires</p>
                <PartnerCarousel />
            </div>
        </section>
    );
}