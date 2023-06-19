export interface INewSale {
    id: number,
    create_at: Date,
    product: string,
    product_id: number,
    seller_id: number,
    value: number,
    payment_form: "credit" | "debit" | "pix"
}