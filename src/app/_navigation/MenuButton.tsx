import {Menu} from "lucide-react";

export default function MenuButton({onClick}: {onClick: () => void}) {
    return (
        <button
            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
            onClick={onClick}
        >
            <Menu/>
        </button>
    );
}