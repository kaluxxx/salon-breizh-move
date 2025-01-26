"use client"

import {motion} from "framer-motion"
import MapContainer from "@/app/practical-infos/_component/MapContainer";
import {useInView} from "react-intersection-observer";

export default function MapSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
                    transition={{duration: 0.5}}
                    className="text-3xl font-bold text-center mb-12 text-white"
                >
                    Plan d'accès
                </motion.h2>
                <motion.div initial={{opacity: 0, y: 50}} animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                            transition={{duration: 0.5}}>
                    <MapContainer/>
                </motion.div>
            </div>
        </section>
    )
}

