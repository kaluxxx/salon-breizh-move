export interface Response<T = void> {
    status: number;
    message: string;
    errors?: Record<string, string[]>;
    data?: T;
}
