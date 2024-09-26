"use client";

import React, {useState, createContext, ReactNode, useMemo, useEffect} from "react";
import {Exhibitor} from "@/types/exhibitor";
import {Cart} from "@/types/cart";

interface ExhibitorRegistrationFormContextProps {
    children: ReactNode;
}
export interface ExhibitorRegistration {
    exhibitor?: Exhibitor;
    cart?: Cart;
}

interface ExhibitorRegistrationFormContextType {
    exhibitorRegistration: ExhibitorRegistration | null;
    updateRegistrationData: (values: Partial<ExhibitorRegistration>) => void;
}

export const ExhibitorRegistrationFormContext = createContext<ExhibitorRegistrationFormContextType | undefined>(undefined);

export function ExhibitorRegistrationFormContextProvider({ children }: Readonly<ExhibitorRegistrationFormContextProps>) {
    const [exhibitorRegistration, setExhibitorRegistration] = useState<ExhibitorRegistration | null>(null);

    const updateRegistrationData = (values: Partial<ExhibitorRegistration>) => {
        setExhibitorRegistration({ ...exhibitorRegistration, ...values });
    };

    const contextValue = useMemo(() => ({
        exhibitorRegistration,
        updateRegistrationData,
    }), [exhibitorRegistration, updateRegistrationData]);


    return (
        <ExhibitorRegistrationFormContext.Provider value={contextValue}>
            {children}
        </ExhibitorRegistrationFormContext.Provider>
    );
}