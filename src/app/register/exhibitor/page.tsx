import Link from "next/link";

export default async function Page() {

    return (
        <section className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">Pré-réserver votre stand</h1>
            <Link href="/register/exhibitor/step_one"
                  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                Formulaire de pré-réservation
            </Link>
        </section>
    );
}