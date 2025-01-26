import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MenuButton({ onClick }: { onClick: () => void }) {
    return (
        <Button variant="ghost" size="icon" onClick={onClick} aria-label="Menu">
            <Menu className="h-6 w-6" />
        </Button>
    )
}

