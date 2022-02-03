import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

 export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7a0177d5admsh516a3e5123aca81p11d3dfjsn2e917fd099bf'
           }
    });
    return data;
 }