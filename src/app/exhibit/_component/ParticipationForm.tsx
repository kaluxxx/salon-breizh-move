import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function ParticipationForm() {
    return (
        <form className="flex flex-col gap-4">
            <Input type="text" placeholder="Nom"/>
            <Input type="text" placeholder="Prénom"/>
            <Input type="text" placeholder="Entreprise"/>
            <Input type="email" placeholder="Contact email"/>
            <Button type="submit" className="bg-secondary text-white w-full">
                Demander un devis
            </Button>
        </form>
    )
}