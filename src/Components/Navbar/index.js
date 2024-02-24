import './index.modul.css'
import { useLocation } from 'react-router-dom';
import { getCookie, JWT_COOKIES_NAME, setCookies } from '../../Constants/cookies'
import AppApi from '../../Services/AppApi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [userRegData, setUserRegData] = useState([])
  const [logout, setLogout] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  async function fetUserCredential() {
    if (token) {
      const fetUserData = await AppApi.userRegisterData();
      setUserRegData(fetUserData.data);
    } else {
      // console.log("No cookie data found.");
    }
  }
  useEffect(() => {
    fetUserCredential();
  }, []);

  const token = getCookie(JWT_COOKIES_NAME)
  const handleLogoutEvent = () => {
    setLogout(true)
    console.log("logout ===== >", logout)
    setCookies(JWT_COOKIES_NAME, "")
    // navigate("/login")
  }

  return (
    <>
      <div className="nav-bar">
        <div className="navbar">
          <div style={{ display: "flex" }}>
            <div>
              <img src="Image/phone-icon.png" alt="" className="phone-icon" />
            </div>
            <div>
              <p style={{ marginTop: "10px" }}>contact us <br /> 9874563210</p>
            </div>
            <div className="title">
              {/* <img src="texilogo.webp" alt="" /> */}
              <h2>𝔴𝔥𝔢𝔢𝔩𝔰ℌ𝔲𝔟</h2>
              <p style={{ textAlign: "center", color: "grey", marginTop: "-12px" }}>Book Your Travel</p>
            </div>
            {
              token ? <a href="" style={{ textDecoration: "none" }} className="nv-lg-container">Active Account</a>
                : <a href="login" style={{ textDecoration: "none" }} className="nv-lg-container">{logout === true ? "" : "Login Here"}</a>
            }

          </div>
        </div>
        <div className="Bnav-bar" style={{ display: "flex" }}>
          <a href="/" className={isLinkActive("/") ? "active heading " : "heading nav-link "} >HOME</a>
          <a href="your-car" className={isLinkActive("/your-car") ? "active heading2" : "heading2 nav-link"}>YOUR CARS</a>
          <a href="" className={isLinkActive("") ? "active heading2" : "heading2 nav-link"} >CONTACT US</a>
          <a href="about-us" className={isLinkActive("") ? "active heading2" : "heading2 nav-link"}>ABOUT US</a>
          {token ?
            <div className="heading2">
              <div className="dropdown">
                {userRegData && userRegData.name ? <div>
                  <i className='fas fa-user-circle user-icon' style={{ fontSize: "19px" }}></i>
                  <a className='user-name' style={{ textDecoration: "none", color: "white" }}>
                    {userRegData && userRegData.name && userRegData.name.toUpperCase()}
                    <i className="fas fa-caret-down drop-down"></i>
                  </a>
                </div> : ""}

                <div className="dropdown-content">
                  <p >FQA</p>
                  <p >CONTACT</p>
                  <a href="profile" style={{ textDecoration: "none" }}><p >PROFILE</p></a>
                  <p> <a href="" style={{ color: "white", textDecoration: "none" }} onClick={handleLogoutEvent}></a> </p>

                </div>
              </div>
            </div>
            : ""}
        </div>
      </div>
    </>
  );
}

export default Navbar;
