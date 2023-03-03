import { AxiosResponse } from "axios";
import { image } from "./Api";


export const imageApi = {
    getImage: async (): Promise<ArrayBuffer> => { 
        const response: AxiosResponse<ArrayBuffer> = await image.get(`/random/224x260`, {
            responseType: 'arraybuffer',
        });       
        return response.data;
    }
}