"use client";
import {useExhibitorRegistrationFormContext} from "@/hooks/useRegistrationFormContext";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function Confirmation() {
    const router = useRouter();
    const {exhibitor} = useExhibitorRegistrationFormContext().exhibitorRegistration ?? {};

    return (
        <Card className="space-y-4 w-full md:w-2/3">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-center">
                    Récapitulatif de votre pré-réservation
                </CardTitle>
                <CardDescription className="text-center">
                    Pour valider votre pré-réservation, veuillez vérifier les informations ci-dessous.
                </CardDescription>
                <CardContent>
                    {exhibitor ? (
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-xl font-bold text-left">
                                    A. Informations sur l'entreprise
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 px-2">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        defaultValue="sub-item-1"
                                    >
                                        <AccordionItem value="sub-item-1">
                                            <AccordionTrigger className="text-lg font-bold text-left">
                                                Exposant principal
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div>
                                                    <strong>Nom de l'entreprise :</strong> {exhibitor.companyName}
                                                </div>
                                                <div>
                                                    <strong>
                                                        Adresse :
                                                    </strong>
                                                    {exhibitor.address.address}, {exhibitor.address.additionalAddress && `${exhibitor.address.additionalAddress}, `}{exhibitor.address.postalCode} {exhibitor.address.city}
                                                </div>
                                                <div>
                                                    <strong>Numéro de SIRET :</strong> {exhibitor.siret}
                                                </div>
                                                <div>
                                                    <strong>Numéro de TVA :</strong> {exhibitor.tvaNumber}
                                                </div>
                                                <div>
                                                    <strong>Code APE :</strong> {exhibitor.apeCode}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="sub-item-2">
                                            <AccordionTrigger className="text-xl font-bold text-left">
                                                Responsable de l'entreprise
                                            </AccordionTrigger>
                                            <AccordionContent className="space-y-4 px-2">
                                                <div>
                                                    <strong>Responsable d'entreprise
                                                        :</strong> {exhibitor.companyManager.firstName} {exhibitor.companyManager.lastName}
                                                </div>
                                                <div>
                                                    <strong>Contact email responsable d'entreprise
                                                        :</strong> {exhibitor.companyManager.email}
                                                </div>
                                                <div>
                                                    <strong>Contact téléphone responsable d'entreprise
                                                        :</strong> {exhibitor.companyManager.phone}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="sub-item-3">
                                            <AccordionTrigger className="text-xl font-bold text-left">
                                                Responsable du stand
                                            </AccordionTrigger>
                                            <AccordionContent className="space-y-4 px-2">
                                                <div>
                                                    <strong>Responsable du stand
                                                        :</strong> {exhibitor.standManager.firstName} {exhibitor.standManager.lastName}
                                                </div>
                                                <div>
                                                    <strong>Contact email responsable du stand
                                                        :</strong> {exhibitor.standManager.email}
                                                </div>
                                                <div>
                                                    <strong>Contact téléphone responsable du stand
                                                        :</strong> {exhibitor.standManager.phone}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="sub-item-4">
                                            <AccordionTrigger className="text-xl font-bold text-left">
                                                Contact sur le site
                                            </AccordionTrigger>
                                            <AccordionContent className="space-y-4 px-2">
                                                <div>
                                                    <strong>Responsable sur le site
                                                        :</strong> {exhibitor.onSiteContact.firstName} {exhibitor.onSiteContact.lastName}
                                                </div>
                                                <div>
                                                    <strong>Contact email responsable sur le site
                                                        :</strong> {exhibitor.onSiteContact.email}
                                                </div>
                                                <div>
                                                    <strong>Contact téléphone responsable sur le site
                                                        :</strong> {exhibitor.onSiteContact.phone}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-xl font-bold text-left">
                                    B. Guide du salon et site internet
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 px-2">
                                    <div>
                                        <strong>Guide d'exposition
                                            :</strong> {exhibitor.showGuide.companyName}
                                    </div>
                                    <div>
                                        <strong>Adresse du guide
                                            :</strong> {exhibitor.showGuide.address.address}, {exhibitor.showGuide.address.additionalAddress && `${exhibitor.showGuide.address.additionalAddress}, `}{exhibitor.showGuide.address.postalCode} {exhibitor.showGuide.address.city}
                                    </div>
                                    <div>
                                        <strong>Thématiques
                                            :</strong> {exhibitor.showGuide.thematics.join(", ")}
                                    </div>
                                    <div>
                                        <strong>Description de l'entreprise
                                            :</strong> {exhibitor.showGuide.businessDescription}
                                    </div>
                                    <div>
                                        <strong>Site web :</strong> <Link className="underline text-primary"
                                                                          href={exhibitor.showGuide.website}>{exhibitor.showGuide.website}</Link>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-xl font-bold text-left">
                                    C. Emplacement du stand
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 px-2">
                                    {exhibitor.hasCoExhibitors === "yes" && exhibitor.coExhibitors?.length && (
                                        <div>
                                            <strong>Co-exposants :</strong>
                                            <ul>
                                                {exhibitor.coExhibitors?.map((coExhibitor) => (
                                                    <li key={coExhibitor.companyName}>{coExhibitor.companyName}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-xl font-bold text-left">
                                    D. Co-exposition
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 px-2">
                                    <div>
                                        <strong>Commentaires
                                            :</strong> {exhibitor.comments ?? "Aucun commentaire"}
                                    </div>
                                    <div>
                                        <strong>Proche de :</strong> {exhibitor.closeTo ?? "N/A"}
                                    </div>
                                    <div>
                                        <strong>Éloigné de :</strong> {exhibitor.awayFrom ?? "N/A"}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ) : (
                        <p className="text-center text-primary">Aucune pré-réservation en cours</p>
                    )}
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <p className="text-sm">
                        En cliquant sur "Envoyer" votre pré-réservation, vous reconnaissez avoir lu et accepté les{" "}
                        <Link className="underline text-primary" href="#">conditions générales de participation</Link>.
                    </p>
                    <div className="w-full py-2 space-x-8 flex justify-between">
                        <Button
                            onClick={() => router.push("/register/exhibitor/step_two")}
                        >
                            Précédent
                        </Button>
                        <Button
                            type="submit"
                        >
                            Envoyer ma pré-réservation
                        </Button>
                    </div>
                </CardFooter>
            </CardHeader>
        </Card>
    )
}