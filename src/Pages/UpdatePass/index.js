import CustomParagraph from "../../Components/Elements/CustomParagraph"
import CustomButton from "../../Components/Elements/CustomButton"
import CustomInput from "../../Components/Elements/CustomInput"
import Navbar from "../../Components/Navbar"
import { useLocation } from "react-router-dom"

const UpdatePass = () => {
    const currenLOcation = useLocation()


    return (
        <>
            <Navbar />
            <div className='my-Dashboard' style={{ marginTop: "11.5rem" }}>
                <div className='dashBoard-bd'>
                    <i className='fas fa-user-circle'  ></i>
                    <p className='my-Dashboard-heading'> Hello</p>
                </div>
                <hr style={{ marginBlockStart: "auto" }} />
                <div className='my-Account-bd'>
                    <i className='fas fa-user-alt'></i>
                    <p className={'profile-heading' + (currenLOcation.pathname === "/profile" ? " active-heading" : "")}
                    >My Accounts </p>
                </div>
                <div className='pr-Updare-Password' >
                    <i className='fas fa-key' ></i>
                    <p className='profile-heading' value="update-password"> Update Password</p>
                </div>
                <div className='pr-your-trip'>
                    <i className='fas fa-car'></i>
                    <p className='profile-heading' > Your Trip</p>
                </div>
            </div>

            <div className='my-Account-Details' style={{ marginTop: "15rem" }}>
                <p className='my-Account-heading'>Update Password </p>
                <div className="card">
                    <div style={{ display: "flex" }}>

                        <CustomParagraph className="ac-account-Heading">Profile</CustomParagraph>
                        <CustomButton className='ac-edit-heading'>ssdd</CustomButton>
                    </div>
                    <input type="text" className='profile-line' />
                    <>
                        Email : <CustomInput className="ac-emailInput" type="text" />
                        <div className='ac-btn-bd'>
                            <CustomButton className="my-account-cencel-btn"
                            >Cencel</CustomButton>
                            <CustomButton className="my-account-cencel-btn" >Save</CustomButton>
                        </div>
                    </>
                    <>
                        <CustomParagraph className="ac-account-Heading">Email : <span style={{ marginLeft: "1.5rem" }}>pk@gmail.com</span></CustomParagraph>
                    </>
                </div>
            </div>
        </>
    )
}

export default UpdatePass 