import { MapContainer as LeafletMapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

interface MapProps {
    position: [number, number];
}

export default function Map({ position }: MapProps) {
    return (
        <LeafletMapContainer
            center={position}
            zoom={13}
            style={{ width: "100%", height: "100%" }}  // Assure que la carte prend 100% de la largeur et de la hauteur
            scrollWheelZoom={false}
            className="rounded-md"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </LeafletMapContainer>
    );
}
