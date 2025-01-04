"use client";

import {useMemo} from "react";
import dynamic from "next/dynamic";

export default function MapContainer() {
    const Map = useMemo(() => dynamic(() => import('@/components/Map'), {
        loading: () => <div className="w-full h-full flex items-center justify-center">
            <p>Chargement de la carte...</p>
        </div>,
        ssr: false
    }), [])


    return (
        <Map position={[48.062611736010645, -1.731091856910359]} height={400} width={800}/>
    )
}
