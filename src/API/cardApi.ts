import { card } from "./Api";
import { AxiosResponse } from 'axios';
import { IProduct } from "../types/dats";

interface CardApi {
    getCart: () => Promise<IProduct[]>;
}

export const cardApi:CardApi = {
    getCart: async () => { 
        const response: AxiosResponse<IProduct[]> = await card.get('/products?limit=20&page=1');    
        return response.data;
    }
}