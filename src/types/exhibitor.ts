import {Address} from "@/types/address";
import {Person} from "@/types/person";
import {ShowGuide} from "@/types/showGuide";

export interface Exhibitor {
    companyName: string;
    address: Address;
    isSameBillingAddress: string;
    billingAddress: Address;
    siret: string;
    tvaNumber: string;
    apeCode: string;
    companyManager: Person;
    standManager: Person;
    onSiteContact: Person;
    showGuide: ShowGuide;
    hasSpecialRequest: string;
    closeTo?: string;
    awayFrom?: string;
    comments?: string;
    hasCoExhibitors: string;
    coExhibitors?: {
        companyName: string;
    }[];
}
