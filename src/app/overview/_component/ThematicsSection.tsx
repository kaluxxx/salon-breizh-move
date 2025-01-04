"use client";

import {motion} from "framer-motion";
import ThematicCard from "@/app/overview/_component/ThematicCard";

export default function ThematicsSection() {
  const cardVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0},
  };

  const thematics = [
    {
      id: 1,
      title: "Transport sanitaire",
      description: "Le transport sanitaire joue un rôle crucial dans la chaîne de soins en garantissant\n" +
        "                                la prise en charge rapide et efficace des patients, qu’il s’agisse de trajets vers des\n" +
        "                                structures médicales, de transferts inter-hospitaliers ou d’interventions d’urgence.\n" +
        "                                Ces professionnels, ambulanciers et opérateurs spécialisés, sont des maillons essentiels\n" +
        "                                pour préserver des vies et assurer un accès équitable aux soins, quel que soit le lieu\n" +
        "                                ou l’heure. EUROMOVE leur offre une plateforme pour présenter leurs innovations,\n" +
        "                                partager leurs défis et promouvoir leur indispensable contribution à la santé publique.",
      image: "/images/ambulance.jpg"
    },
    {
      id: 2,
      title: "Transport de marchandises",
      description: "Au cœur de l’économie, le transport de marchandises est un pilier incontournable pour connecter\n" +
        "                                les entreprises, les industries et les consommateurs. Qu’il s’agisse de logistique\n" +
        "                                urbaine, de transport national ou international, ce secteur évolue rapidement pour\n" +
        "                                répondre aux exigences croissantes de rapidité, de fiabilité et de durabilité. EUROMOVE\n" +
        "                                met en avant les solutions qui façonnent l’avenir de cette branche, notamment les\n" +
        "                                technologies visant à optimiser les flux, réduire les émissions et renforcer la\n" +
        "                                compétitivité des entreprises.",
      image: "/images/truck.jpg"
    },
    {
      id: 3,
      title: "Transport de voyageurs",
      description: "Faciliter les déplacements des personnes, tout en répondant aux attentes de confort, de sécurité\n" +
        "           et de durabilité, est au cœur des enjeux du transport de voyageurs. Ce domaine englobe une large variété\n" +
        "           d’acteurs, des opérateurs de transports en commun aux services de mobilité partagée. À l’heure où les besoins\n" +
        "            en solutions multimodales et les attentes en matière de mobilité douce s’intensifient, EUROMOVE offre une\n" +
        "            tribune pour promouvoir les innovations et les stratégies permettant de repenser les déplacements humains\n" +
        "             dans une logique plus inclusive et respectueuse de l’environnement.",
      image: "/images/bus.jpg"
    },
    {
      id: 4,
      title: "Transport routier",
      description: "Le transport routier est la colonne vertébrale des réseaux de mobilité, reliant les territoires\n" +
        "          et facilitant les échanges entre villes et régions. Véritable moteur de l’économie locale et internationale,\n" +
        "           il regroupe des constructeurs, des opérateurs et des prestataires qui innovent constamment pour répondre aux\n" +
        "           enjeux de sécurité, d’efficacité et d’impact environnemental. EUROMOVE valorise ce secteur en mettant en\n" +
        "           lumière les progrès techniques, les véhicules de nouvelle génération et les initiatives durables qui\n" +
        "           transforment ce mode de transport essentiel.",
      image: "/images/road.jpg"
    }
  ];


  return (
    <section
      className="px-4 py-16 min-h-[calc(100vh-70px)]"
      style={{backgroundImage: "url(/images/wave-3.svg)", backgroundSize: "cover"}}
    >
      <h1 className="text-4xl text-secondary font-bold text-center">Les différents secteurs</h1>
      <p className="text-center mt-4">
        Découvrez les différents secteurs d'activités du salon EUROMOVE
      </p>
      <div className="container mx-auto grid lg:grid-cols-2 justify-center gap-16 mt-16">
        {thematics.map((thematic, index) => (
          <motion.div
            key={thematic.id}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{duration: 0.5, delay: index * 0.3}}
          >
            <ThematicCard
              title={thematic.title}
              description={thematic.description}
              image={`/images/${thematic.image}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
    ;
}
