export interface Payment {
    creditCardNumber: string;
    cardHolder: string;
    expirationDate: Date;
    cvv?: string;
    amount: number;
}