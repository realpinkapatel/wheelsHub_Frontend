import './index.modul.css'
import Navbar from '../../Components/Navbar'
import CustomInput from '../../Components/Elements/CustomInput'
import CustomParagraph from '../../Components/Elements/CustomParagraph'
import CustomSpan from '../../Components/Elements/CustomSpan'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { getCookie, setCookies, JWT_COOKIES_NAME, TOKEN_EXPIR_TIME } from '../../Constants/cookies'
import CustomLoadBtn from '../../Components/Elements/CustomButton/CustomLoadBtn'
// let isUserAlreadyLogin = false

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [userNotFoundError, setUserNotFoundError] = useState("");
    const [loading, setLoading] = useState(false);

    const getCookieData = getCookie(JWT_COOKIES_NAME);
    // console.log("getCookieData ===== >", getCookieData)

    // if (getCookieData) {
    //     isUserAlreadyLogin = true;
    //     window.location = "http://localhost:3000/"
    // }
    const getEmailInput = (event) => {
        let value = event.target.value
        setEmail(value)
        setUserNotFoundError("")
        setEmailError("")
    }

    const getPassInput = (event) => {
        let value = event.target.value
        setPass(value)
        setUserNotFoundError("")
        setPassError("")
    }

    const onBtnClick = async () => {
        let isLoginFill = true;

        if (email && email.trim()) {
            setEmailError("")
        } else {
            setEmailError("Enter email-id")
            isLoginFill = false
        }
        if (pass) {
            setPassError("")
        } else {
            setPassError("Enter password")
            isLoginFill = false
        }
        console.log("isLoginFill ==== >", isLoginFill)

        try {
            if (isLoginFill === true) {
                setLoading(true);
                const fetchLoginData = await axios.post("http://localhost:8000/api/v1/user-login", {
                    email, pass // with the help of post Api this data post on server
                });
                setLoading(false);
                let successStatus = fetchLoginData.status === 200

                if (successStatus) {
                    let token = fetchLoginData.data.token
                    // const istExpirationTime = new Date(Date.now() + 60 * 1000);
                    setCookies(JWT_COOKIES_NAME, token, {
                        Expire:TOKEN_EXPIR_TIME.ONE_DAYS,
                    });

                    setTimeout(() => {
                        window.location = '/'
                    }, 1000);
                }

            }

        } catch (error) {
            console.log("my login catch error ", error.name)
            if (error.name) {
                setUserNotFoundError("Couldn't find your Account");
            }
            setLoading(false);
        }
    }
    // if (isUserAlreadyLogin) {
    //     return null; // User is already logged in, so return nothing
    // }
    return (
        <>
            <Navbar />
            <div className="lg-body-container" >
                <CustomParagraph>.</CustomParagraph>
                <div className='lg-container'>
                    <h3>Log in</h3>
                    <div>
                        <CustomInput
                            type="text"
                            placeholder='Email'
                            className='lg-Input-container'
                            value={email}
                            onChange={getEmailInput}

                        />
                        <CustomSpan
                            className='errormsg'
                        >{emailError}</CustomSpan>
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
                            className='lg-errormsg'
                        >{passError}</CustomSpan>
                    </div>
                    <CustomSpan
                        className='lg-errormsg2'
                    >{userNotFoundError}</CustomSpan><br />
                    <CustomLoadBtn isLoading={loading} onClick={onBtnClick}>
                        Log in
                    </CustomLoadBtn><br /><br />

                    <CustomParagraph className="lg-forgot">Forgot Password?</CustomParagraph>
                    <div style={{ marginBottom: "15px" }}>

                        <CustomSpan className="lg-creactAcMsg"> Don't have an account? <a href="register" > Create an account</a></CustomSpan>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login; 