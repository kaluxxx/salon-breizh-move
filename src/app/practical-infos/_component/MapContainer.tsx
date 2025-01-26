"use client";

import {useMemo} from "react";
import dynamic from "next/dynamic";

export default function MapContainer() {
    const Map = useMemo(() => dynamic(() => import('@/components/Map'), {
        loading: () => <div className="max-w-6xl h-full flex items-center justify-center">
            <p>Chargement de la carte...</p>
        </div>,
        ssr: false
    }), []);

    return (
        <div className="w-full h-96 lg:h-[500px]"> {/* Ajustement de la hauteur pour mobile et desktop */}
            <Map position={[48.062611736010645, -1.731091856910359]} />
        </div>
    );
}
