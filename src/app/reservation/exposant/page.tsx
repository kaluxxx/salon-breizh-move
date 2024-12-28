import Link from "next/link";
import {Button} from "@/components/ui/button";

export default async function Page() {

    return (
        <section className="flex flex-col justify-center items-center gap-4 min-h-[70vh] max-w-2xl mx-auto text-center">
            <h1 className="text-4xl text-secondary font-bold">Pré-réserver votre stand</h1>
            <p>Réservez dès maintenant votre stand pour le salon du transport EUROMOVE</p>
            <p>Vous êtes exposant ?</p>
            <p>Rejoignez-nous pour imaginer ensemble le futur du transport ainsi que pour un moment d’échange et
                d’innovation, au cœur des défis et transformations qui redéfinissent le monde du transport
                aujourd’hui et pour demain !
            </p>
            <Button asChild size="lg">
                <Link href="/reservation/exposant/infos">Pré-réserver</Link>
            </Button>
        </section>
    );
}