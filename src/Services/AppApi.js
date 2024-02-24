import AxiosApi from "../Constants/AxiosApi"

const AppApi = {
    userCarList: async (data, bodyData) => {
        return await AxiosApi.post(`user-getCarList${data ? ("?" + data) : ""}`, bodyData);
    },
    userRegisterData:async(bodyData)=>{
        return await AxiosApi.get(`user-getRegisterData`,"",{
            method:"GET"
        });
    }

}

export default AppApi;