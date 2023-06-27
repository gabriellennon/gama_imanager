export type IPaymentForm = "credit" | "debit" | "pix"
export interface INewSale {
    id: number,
    create_at: Date,
    product: string,
    product_id: number,
    seller_id: number,
    value: number,
    payment_form: IPaymentForm
}

export interface IResponseGetSales {
    create_at: string;
    id: number;
    payment_form: IPaymentForm;
    product: string;
    product_id: number;
    seller_id: number;
    value: number;
}