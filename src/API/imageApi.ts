import { AxiosResponse } from "axios";
import { image } from "./Api";


export const imageApi = {
    getImage: async (): Promise<ArrayBuffer[]> => { 
        const response: AxiosResponse<ArrayBuffer> = await image.get(`/random/224x260`, {
            responseType: 'arraybuffer',
        });  
        const responseTwo: AxiosResponse<ArrayBuffer> = await image.get(`/random/224x260`, {
          responseType: 'arraybuffer',
        });  
        const responseThree: AxiosResponse<ArrayBuffer> = await image.get(`/random/224x260`, {
          responseType: 'arraybuffer',
        });  
        const arrImages = [response.data, responseTwo.data, responseThree.data]
    
        return arrImages;
    }

}