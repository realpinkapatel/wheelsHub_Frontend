import fetchApi from "../Constants/fetchApi"

const AuthApi = {
    UseRegister: async (data) => {
        return await fetchApi("user-register", data, {
            method: "POST"
        });
    },
    UseRegisterDataUpdate: async (data) => {
        return await fetchApi("user-updateRegData", data, {
            method: "POST"
        });
    },
    useLogin: async (data) => {
        return await fetchApi("user-login", data, {
            method: "POST"
        });
    },

}

export default AuthApi;