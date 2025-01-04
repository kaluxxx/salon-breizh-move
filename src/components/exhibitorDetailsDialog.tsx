"use client";
import {ClientActionDialogContentProps} from "@premieroctet/next-admin";
import {Button} from "@premieroctet/next-admin/components";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Link from "next/link";
import {getCivility} from "@/lib/format";
import {useEffect, useState} from "react";
import {getShowGuideById} from "@/app/action/showGuideAction";
import {ShowGuide} from "@prisma/client";

type ExtendedProps = ClientActionDialogContentProps<"Exhibitor">;


const UserDetailsDialog = ({data, onClose}: ExtendedProps) => {
    const [showGuide] = useState<ShowGuide | null>(null);

    useEffect(() => {
        if (!data) return;
        console.log("data", data);
        const getShowGuide = async (id: string) => {
            return await getShowGuideById(id);
        }

        getShowGuide(data?.[0]?.showGuideId).then((showGuide) => {
            console.log("showGuide", showGuide);
        });
    }, [data]);

    useEffect(() => {
        console.log("showGuide", showGuide);
    }, [showGuide]);
    return (
        <div className="flex flex-col gap-8">
            {data?.map((exhibitor) => (
                <Accordion
                    key={exhibitor.id}
                    type="single"
                    collapsible
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl font-bold text-left">
                            Informations sur l'entreprise
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
                                                Adresse :{" "}</strong>
                                            {exhibitor.address.address}, {exhibitor.address.additionalAddress && `${exhibitor.address.additionalAddress}, `}{exhibitor.address.postalCode} {exhibitor.address.city}
                                        </div>
                                        <div>
                                            <strong>Adresse email :</strong> {exhibitor.address.email}
                                        </div>
                                        <div>
                                            <strong>Téléphone :</strong> {exhibitor.address.phone}
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
                                    <AccordionTrigger className="text-lg font-bold text-left">
                                        Responsable de l'entreprise
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div>
                                            <strong>Responsable de l'entreprise
                                                :</strong> {getCivility(exhibitor.companyManager.civility)} {exhibitor.companyManager.firstName} {exhibitor.companyManager.lastName}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="sub-item-3">
                                    <AccordionTrigger className="text-lg font-bold text-left">
                                        Responsable du stand
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div>
                                            <strong>Responsable du stand
                                                :</strong> {getCivility(exhibitor.standManager.civility)} {exhibitor.standManager.firstName} {exhibitor.standManager.lastName}
                                        </div>
                                        <div>
                                            <strong>Adresse email du responsable du stand
                                                :</strong> {exhibitor.standManager.email}
                                        </div>
                                        <div>
                                            <strong>Téléphone du responsable du stand
                                                :</strong> {exhibitor.standManager.phone}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="sub-item-4">
                                    <AccordionTrigger className="text-lg font-bold text-left">
                                        Contact sur le site
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div>
                                            <strong>Contact sur le site
                                                :</strong> {getCivility(exhibitor.onSiteContact.civility)} {exhibitor.onSiteContact.firstName} {exhibitor.onSiteContact.lastName}
                                        </div>
                                        <div>
                                            <strong>Adresse email du contact sur le site
                                                :</strong> {exhibitor.onSiteContact.email}
                                        </div>
                                        <div>
                                            <strong>Téléphone du contact sur le site
                                                :</strong> {exhibitor.onSiteContact.phone}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl font-bold text-left">
                            Guide du salon et site internet
                        </AccordionTrigger>
                        <AccordionContent>
                            <div>
                                <strong>Nom de l'entreprise
                                    :</strong> {exhibitor.showGuide.companyName}
                            </div>
                            {/*<div>*/}
                            {/*    <strong>Adresse de l'entreprise*/}
                            {/*        :</strong> {exhibitor.showGuide.address.address}, {exhibitor.showGuide.address.additionalAddress && `${exhibitor.showGuide.address.additionalAddress}, `}{exhibitor.showGuide.address.postalCode} {exhibitor.showGuide.address.city}*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <strong>Adresse email de l'entreprise*/}
                            {/*        :</strong> {exhibitor.showGuide.address.email}*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <strong>Téléphone de l'entreprise*/}
                            {/*        :</strong> {exhibitor.showGuide.address.phone}*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <strong>Rubriques*/}
                            {/*        :</strong> {exhibitor.showGuide.thematics.map((thematic) => data?.find((t) => t.id === thematic)?.name).join(", ")}*/}
                            {/*</div>*/}
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
                                Emplacement du stand
                            </AccordionTrigger>
                            <AccordionContent>
                                <div>
                                    <strong>Proche de :</strong> {exhibitor.closeTo ?? "N/A"}
                                </div>
                                <div>
                                    <strong>Éloigné de :</strong> {exhibitor.awayFrom ?? "N/A"}
                                </div>
                                <div>
                                    <strong>Commentaires
                                        :</strong> {exhibitor.comments ?? "Aucun commentaire"}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    {!!exhibitor.coExhibitors?.length && (
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-xl font-bold text-left">
                                Co-exposition
                            </AccordionTrigger>
                            <AccordionContent>
                                <div>
                                    <strong>Co-exposants :</strong>
                                    <ul className="list-disc list-inside">
                                        {exhibitor.coExhibitors?.map((coExhibitor) => (
                                            <li key={coExhibitor.companyName}>{coExhibitor.companyName}</li>
                                        ))}
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    )}
                </Accordion>
            ))}
            <div className="flex">
                <Button variant="default" onClick={() => onClose?.()}>
                    Fermer
                </Button>
            </div>
        </div>
    );
};

export default UserDetailsDialog;