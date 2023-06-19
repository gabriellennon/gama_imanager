import { api } from "./api";
import { INewSale } from "./types";

export function getSales() {
    return api.get('/sales');
}

export function registerNewSale(infoSale: INewSale){
    return api.post('/sales', infoSale)
}

export function getSallers(){
    return api.get('/sallers')
}