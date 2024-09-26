import Form from "@/app/signIn/form";
import Image from "next/image";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function LoginPage() {
    return (
        <main className="h-[calc(100vh-70px)] flex flex-col">
            <section className="container mx-auto px-4 flex-1 flex flex-col md:flex-row justify-between items-center">
                <div className="flex-1">
                    <Image src="/images/login.jpg" alt="Se connecter" className="w-full" width={800} height={600}/>
                </div>
                <div className="flex-1">
                    <Card className="max-w-lg mx-auto py-4">
                        <CardHeader className="gap-4 py-3 px-6">
                            <CardTitle className="text-2xl text-center font-bold">
                                Se connecter
                            </CardTitle>
                            <CardDescription>Entrez l'email avec lequel vous avez êtes inscrit. Nous vous enverrons
                                un lien de connexion à cette adresse.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form/>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}