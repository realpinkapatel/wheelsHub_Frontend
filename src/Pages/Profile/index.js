import './index.modul.css'
import NavBar from '../../Components/Navbar/index'
import CustomParagraph from '../../Components/Elements/CustomParagraph'
import CustomButton from '../../Components/Elements/CustomButton'
import { useState, useEffect, useContext } from 'react'
import CustomInput from '../../Components/Elements/CustomInput'
import AppApi from '../../Services/AppApi'
import AuthApi from '../../Services/AuthApi'
import { useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/sideBar'

let nameChange
let emailchange
let phoneChange
let cityChange
function Profile() {
    const [editMode, setEditMode] = useState(false); // Changed to a boolean to indicate edit mode
    const [cancelMode, setCancelMode] = useState(false); // Changed to a boolean to indicate edit mode
    const [userData, setUserData] = useState({}); // Store user data
    const [city, setCity] = useState("")
    const [gender, serGender] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    // const currenLOcation = useLocation()
    const navigate = useNavigate()
    // console.log("currenLOcation ==== >", currenLOcation.pathname)

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch user data from an API when the component mounts
                const userData = await AppApi.userRegisterData('/registerData');
                if (userData.data) {
                    const { name, email, phone, city, gender } = userData.data;
                    if (name || email || phone) {
                        setName(name);
                        setEmail(email)
                        setPhone(phone)
                        setCity(city)
                        serGender(gender)
                    }
                    setUserData(userData.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);


    const onCityInputChange = (e) => {
        cityChange = e.type
        setCity(e.target.value)
    }
    const onGenderClick = (e) => {
        console.log(e.target.value)
        serGender(e.target.value)
    }

    const handleEditClick = () => {
        setEditMode(true); // Set the value to true when the Edit tag is clicked
    };

    const onNameChangeEvent = (e) => {
        nameChange = e.type
        setName(e.target.value)
    }

    const onEmailChangeEvent = (e) => {
        emailchange = e.type
        setEmail(e.target.value)
    }
    const onPhoneChangeEvent = (e) => {
        phoneChange = e.type
        setPhone(e.target.value)
    }
    let isProfileUpdated = false
    async function handleSaveClick() {
        const userUpdateProfileData = {
            name: name ? name : userData.name,
            email: email ? email : userData.email,
            phone: phone ? phone : userData.phone,
            city: city ? city : userData.city,
            gender: gender ? gender : userData.gender,
        }
        console.log("new updated data ====== >", userData.name)
        try {
            const saveData = await AuthApi.UseRegisterDataUpdate(userUpdateProfileData)
            console.log("saveData ===== >", saveData)
            isProfileUpdated = true
            if (isProfileUpdated) {
                setEditMode(false)
            }
        } catch (error) {
            console.log("error ======= >", error);
        }

    }
    return (
        <div>
            <NavBar />
            <div className='main-bd'>
                <Sidebar />
                <div className='my-Account-Details'>
                    <p className='my-Account-heading'>My Account </p>
                    <div className="card">
                        <div style={{ display: "flex" }}>
                            <CustomParagraph className="ac-account-Heading">Profile</CustomParagraph>
                            <CustomButton className='ac-edit-heading' value={editMode} onClick={handleEditClick}>{editMode ? "" : "Edit"}</CustomButton>
                        </div>
                        <input type="text" className='profile-line' />
                        {editMode && !cancelMode ?
                            <>
                                Name : <CustomInput className="ac-NameInput" type="text" value={name} onChange={onNameChangeEvent} />
                                Email :  <CustomInput className="ac-emailInput" type="text" value={emailchange ? email : userData && userData.email} onChange={onEmailChangeEvent} />
                                Phone : <CustomInput className="ac-PhoneInput" type="text" value={phoneChange ? phone : userData && userData.phone} onChange={onPhoneChangeEvent} />
                                City : <CustomInput className="ac-cityInput" type="text" value={cityChange ? city : userData && userData.city} onChange={onCityInputChange} />
                                <div style={{ display: "flex" }} onClick={onGenderClick}>
                                    <CustomParagraph className="ac-Gendert-Heading">Gender :</CustomParagraph>
                                    <label style={{ marginLeft: "1.5rem" }}>
                                        Female<CustomInput type="radio" name="gender" checked={gender === "female"} value="female" style={{ marginLeft: ".5rem" }} />
                                    </label>
                                    <label style={{ marginLeft: "2.5rem" }}>
                                        Male<CustomInput type="radio" name="gender" checked={gender === "male"} value="male" style={{ marginLeft: ".5rem" }} />
                                    </label>
                                </div>
                                <div className='ac-btn-bd'>
                                    <CustomButton className="my-account-cencel-btn" onClick={(e) => {
                                        setCancelMode(true)
                                        console.log("cancel btn ==== >", cancelMode)
                                    }}>Cencel</CustomButton>
                                    <CustomButton className="my-account-cencel-btn" onClick={handleSaveClick}>Save</CustomButton>
                                </div>
                            </>
                            :
                            <>
                                <CustomParagraph className="ac-account-Heading">Name : <span style={{ marginLeft: "1.5rem" }}>{userData.name && name}</span></CustomParagraph>
                                <CustomParagraph className="ac-account-Heading">Email : <span style={{ marginLeft: "1.5rem" }}>{userData.email && email}</span></CustomParagraph>
                                <CustomParagraph className="ac-account-Heading">Phone : <span style={{ marginLeft: "1rem" }}>{userData.phone && phone}</span></CustomParagraph>
                                <CustomParagraph className="ac-account-Heading">City : <span style={{ marginLeft: "2.5rem" }}>{userData.city ? userData.city : city}</span></CustomParagraph>
                                <CustomParagraph className="ac-account-Heading">Gender : <span style={{ marginLeft: ".5rem" }}>{userData.gender ? userData.gender : gender}</span></CustomParagraph>
                            </>
                        }
                    </div>
                </div>
                <div className="ac-social-Link-card" >
                    <CustomParagraph className="ac-account-Heading">Profile</CustomParagraph>
                    <input type="text" className='profile-line' />
                    <p>Connect your social accounts to log in through
                        Facebook or Google <br /><br />
                        Link more social network account
                    </p>
                    <div className='ac-icon-bd'>
                        <img src="../google.png" alt="" className='ac-google-img' />
                        <img src="../facebook.avif" alt="" className='ac-facebook-img' />
                        <img src="../linkedin.webp" alt="" className='ac-linkedin-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile