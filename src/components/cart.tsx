"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {useExhibitorRegistrationFormContext} from "@/hooks/useRegistrationFormContext";

export default function Cart() {
    const {cart} = useExhibitorRegistrationFormContext().exhibitorRegistration ?? {};
    const emptyCart = !cart?.fees && !cart?.stand && (!cart?.variants || cart.variants.every(variant => !variant.quantity));

    return (
        <Card className="md:sticky md:top-[100px] z-50 w-full">
            <CardHeader>
                <CardTitle>
                    Votre panier
                </CardTitle>
                {emptyCart && (
                    <CardDescription>
                        Votre panier est vide, remplissez le formulaire et sélectionnez un stand pour continuer.
                    </CardDescription>
                )}
            </CardHeader>
            {!emptyCart && (
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <span>Frais d'inscription</span>
                            <span>{cart.fees}€</span>
                        </div>
                        <Separator/>
                        {cart?.variants?.map(variant => {
                            if (variant.quantity) {
                                return (
                                    <>
                                        <div key={variant.id} className="flex justify-between">
                                            <span>{variant.name} x{variant.quantity}</span>
                                            <span>{(variant.price ?? 0) * Number(variant.quantity)} €</span>
                                        </div>
                                        <Separator/>
                                    </>

                                )
                            }
                        })}
                        <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>{cart.total} €</span>
                        </div>
                    </div>
                </CardContent>
            )}
        </Card>
    )
}