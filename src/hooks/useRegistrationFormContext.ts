import {useContext} from "react";
import {ExhibitorRegistrationFormContext} from "@/provider/exhibitorFormContextProvider";

export const useExhibitorRegistrationFormContext = () => {
    const context = useContext(ExhibitorRegistrationFormContext)
    if (!context) {
        throw new Error('useNewPropertyFormContext must be used within a ExhibitorRegistrationFormContextProvider')
    }

    return context
}