import Cookies from "js-cookie";
import appConfig from "./appConfig"
import axios from 'axios';


const AxiosApi = {
    get: async (url, data = {}) => {
        try {
            const headers = {
                "token": Cookies.get("jwt")
            }
            const result = await axios.get(appConfig.API_BASE_URL + url, {
                headers,
                params: data
            });
            if (result && result.data) {
                return result.data;
            } else {
                return result;
            }
        } catch (error) {
            console.log("My error ===>", error);
            return error;
        }
    },
    post: async (url, data = {}) => {
        try {
            // const optisonData={};
            // if(data){
            //     optisonData.data=data;
            // }
            const result = await axios.post(appConfig.API_BASE_URL + url, data);
            if (result && result.data) {
                return result.data;
            } else {
                return result;
            }
        } catch (error) {
            console.log("My error ===>", error);
            return error;
        }
    }
}
export default AxiosApi;