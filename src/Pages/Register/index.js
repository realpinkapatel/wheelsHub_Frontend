import './index.modul.css'
import Navbar from '../../Components/Navbar';
import CustomInput from '../../Components/Elements/CustomInput';
import CustomSpan from '../../Components/Elements/CustomSpan';
import CustomParagraph from '../../Components/Elements/CustomParagraph'
import { useState } from 'react'
import CustomLoadBtn from '../../Components/Elements/CustomButton/CustomLoadBtn';
import AuthApi from '../../Services/AuthApi';
import { useNavigate } from 'react-router-dom';
// import fetchApi from '../../Constants/fetchApi';
// import appConfig from '../../Constants/appConfig';

let value = "";

function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("");
    const [city, setCity] = useState("");
    const [pass, setPass] = useState("");
    const [conPass, setConPass] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNoError, setPhoneNoError] = useState("");
    const [passError, setPassError] = useState("");
    const [userAlreadyREg, setUserAlreadyReg] = useState("");
    const [loading, setLoading] = useState(false);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const getNameInput = (event) => {
        value = event.target.value
        setName(value);
        if (value) {
            setNameError("")
        }
    }
    const getEmailInput = (event) => {
        value = event.target.value
        setEmail(value)
        setUserAlreadyReg("")
        if (value && isValidEmail) {
            setEmailError("")
        } else if (!isValidEmail) {
            setEmailError("Invalid Email")
        }

    }
    const getPhoneInput = (event) => {
        value = event.target.value
        setPhoneNo(value);
        if (value) {
            setPhoneNoError("")
        }
    }

    const getPassInput = (event) => {
        value = event.target.value
        setPass(value)
        if (value) {
            setPassError("")
        }
    }

    const onBtnClick = async () => {
        const isValidLname = /^[a-zA-Z]+$/.test(name);
        // const isValidNumber = /^[0]?[789]\d{9}$/.test(phoneNo);
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

        let isAllDataValid = true
        // let isUniqueData = true

        if (name && isValidLname && name.length >= 3) {
            setNameError("")
        } else if (!name) {
            setNameError("Enter Your Name")
            isAllDataValid = false
        } else if (!isValidLname) {
            setNameError("Enter Valid Name")
            isAllDataValid = false
        } else {
            setNameError("Enter Name Minimum 3 Character")
            isAllDataValid = false
        }

        if (email && isValidEmail) {
            setEmailError("")
        } else if (!email) {
            setEmailError('Enter Your Email-id')
            isAllDataValid = false
        } else {
            setEmailError('Enter Valid Email')
            isAllDataValid = false

        }

        if (phoneNo) {
            setPhoneNoError("")
        } else {
            setPhoneNoError("Enter Your Phone No.")
            isAllDataValid = false
        }

        if (pass) {
            setPassError("")
        } else {
            setPassError("Enter Your Password")
            isAllDataValid = false
        }
        // if(isUniqueData === false){
        //     setUserAlreadyReg("Already Registered")
        // }
        // console.log(" teston ==== >", isUniqueData)
        if (isAllDataValid === true) {
            const userRegterData = {
                name: name,
                email: email,
                phone: phoneNo,
                city: city,
                pass: pass,
                gender: value,
            }
            console.log("userRegterData ==== >", userRegterData)
            setLoading(true)
            // const fetchData = await fetch(appConfig.API_BASE_URL + "/user-register", {
            //     method: "POST",
            //     headers: { 'Content-Type': "application/json" },
            //     body: JSON.stringify(userRegterData), // store the data in database
            // });
            const fetchData = await AuthApi?.UseRegister(userRegterData);
            console.log("fethdata ppp=== >", fetchData)
            setLoading(false)
            if (fetchData?.status === 409 || 401) {
                setUserAlreadyReg("This Account Already Registered")
            } else {
                setUserAlreadyReg("server error")
            }

            if (fetchData?.status === 200) {
                setName('')
                setEmail('')
                setPhoneNo('')
                setCity('')
                setPass('')
                setConPass('')
                navigate('/login')
            }

        }

    }
    return (
        <>
            <Navbar />
            <div className="rg-body-container" >
                <CustomParagraph>.</CustomParagraph>
                <div className='rg-container'>
                    <h3>Registration</h3>
                    <div>
                        <CustomInput
                            type="text"
                            placeholder='Name'
                            className='rg-Input-container'
                            value={name}
                            onChange={getNameInput}

                        />
                        <CustomSpan
                            className='errormsg'
                        >{nameError}</CustomSpan>
                    </div>
                    <div>
                        <CustomInput

                            type="text"
                            placeholder='Email'
                            className='rg-Input-container'
                            value={email}
                            onChange={getEmailInput}
                        />
                        <CustomSpan
                            className='errormsg'
                        >{emailError}</CustomSpan>
                    </div>
                    <div>
                        <CustomInput
                            type="number"
                            placeholder='Phone Number'
                            className='rg-Input-container'
                            value={phoneNo}
                            onChange={getPhoneInput}
                        />
                        <CustomSpan
                            className='errormsg'
                        >{phoneNoError}</CustomSpan>
                    </div>
                    <div>
                        <CustomInput
                            type="password"
                            placeholder='Password'
                            className='rg-Input-container'
                            value={pass}
                            onChange={getPassInput}
                        />
                        <CustomSpan
                            className='errormsg'
                        >{passError}</CustomSpan>
                    </div>
                    <CustomSpan
                        className='errormsg2'
                    >{userAlreadyREg}</CustomSpan><br />
                    <CustomLoadBtn className='rg-btn-container' isLoading={loading} onClick={onBtnClick}>Register</CustomLoadBtn><br /><br />


                    <CustomSpan style={{ marginLeft: "65px" }}> Already have an account? <a href="login" > Log in</a></CustomSpan>

                </div>
            </div>
        </>
    )
}

export default Register;