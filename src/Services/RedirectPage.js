import appConfig from "../Constants/appConfig";

const RedirectPage={
    yourCar:(data) => {
        console.log("ParamApi com==== >", data)
        window.location.href = `your-car` + (data ? "?" + data : "").toLowerCase();
    }
    
}

export default RedirectPage;