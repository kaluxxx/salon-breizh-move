import {Address} from "@/types/address";
import {Thematic} from "@/types/thematic";

export interface ShowGuide {
    companyName: string;
    address: Address;
    thematics: string[];
    businessDescription: string;
    website: string;
}