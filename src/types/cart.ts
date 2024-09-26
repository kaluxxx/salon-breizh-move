export interface Cart {
    fees: number;
    stand: string;
    variants: {
        id?: string;
        name?: string;
        quantity?: number | string;
        price?: number;
    }[];
    total: number;
}