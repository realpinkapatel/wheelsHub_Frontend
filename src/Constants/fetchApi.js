import appConfig from "./appConfig"
import Cookies from "js-cookie"

const API_BASE_URL = appConfig.API_BASE_URL


const fetchApi = async (url, data, options = {isForm:true}) => {
    try {
        const headers = {}
        const jwt =Cookies.get("jwt")
        if(jwt){
            headers.token=jwt;
        }
        if(!options.isForm){
            headers["Content-Type"]="application/json";
        }

        const fetchOptions = {
            method: options.method,
            headers: headers
        }
        if ((options.method === "POST" || options.method === "PATCH") && data) {
            fetchOptions.body =  JSON.stringify(data)
        }
        const res = await fetch(API_BASE_URL + url,fetchOptions ) 
        
        if (res.status === 200) {
            const data = await res.json();
            return data
        } else {
            return res
        }
    } catch (error) {

    }
}
export default fetchApi;