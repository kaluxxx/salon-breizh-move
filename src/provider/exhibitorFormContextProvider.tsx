"use client";
import React, {useState, createContext, ReactNode, useMemo, useCallback} from "react";
import {Exhibitor} from "@/types/models/exhibitor";
import {Cart} from "@/types/models/cart";

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

    const updateRegistrationData = useCallback((values: Partial<ExhibitorRegistration>) => {
        setExhibitorRegistration((prev) => ({ ...prev, ...values }));
    }, []);

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