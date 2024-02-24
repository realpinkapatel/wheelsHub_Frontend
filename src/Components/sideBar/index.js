import { useEffect, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AppApi from "../../Services/AppApi"
import { MyContext } from "../../Constants/useContext"

const Sidebar = () => {
    const currenLOcation = useLocation()
    const context = useContext(MyContext)
    const navigate = useNavigate()
    console.log("current location ===== >",currenLOcation)
    useEffect(() => {
        async function fetchAPI() {
            try {
                const fetchData = await AppApi.userRegisterData('/registerData');
                context.setUserCredential(fetchData?.data);
            } catch (error) {
                console.log("error ===>", error);
            }
        }
        fetchAPI();
    }, []);
    const onUpdatePass = () => {
        console.log("called function")
        navigate("/update-pass")
    }

    return (
        <div>
            <div className='my-Dashboard'>
                <div className='dashBoard-bd'>
                    <i className='fas fa-user-circle' style={{ marginTop: "5rem" }} ></i>
                    <p className='my-Dashboard-heading'>Hello {context?.userCredential?.name?.toUpperCase()}</p>
                </div>
                <hr style={{ marginBlockStart: "auto" }} />
                <div className='my-Account-bd'>
                    <i className='fas fa-user-alt'></i>
                    <p className={'profile-heading' + (currenLOcation.pathname === "/profile" ? " active-heading" : "")}
                    >My Accounts </p>
                </div>
                <div className='pr-Updare-Password' >
                    <i className='fas fa-key' ></i>
                    <p className={'profile-heading' + (currenLOcation.pathname === "/update-pass" ? " active-heading" : "")} onClick={onUpdatePass} value="update-password">Update Password</p>
                </div>
                <div className='pr-your-trip'>
                    <i className='fas fa-car'></i>
                    <p className={'profile-heading' + (currenLOcation.pathname === "/your-trip" ? " active-heading" : "")} > Your Trip</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar