import './index.modul.css'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer';
import CustomButton from '../../Components/Elements/CustomButton'
import { useState } from 'react';
import appConfig from '../../Constants/appConfig';
import CustomInput from '../../Components/Elements/CustomInput';
import RedirectPage from '../../Services/RedirectPage.js';


function Home() {
    const [chooseCity, setChooseCity] = useState("Select Your City")
    const [chooseCar, setChooseCar] = useState("Choose Car Make")

    let value = ""
    const citySelect = (event) => {
        value = event.target.innerHTML
        setChooseCity(value)
    }
    const carSelect = (event) => {
        value = event.target.innerHTML
        setChooseCar(value)
    }
    const onFindBtn = () => {
        console.log("testing ===>", "your-car?city=" + chooseCity)
        if (chooseCity !== "Select Your City" && chooseCar !== "Choose Car Make") {
            RedirectPage.yourCar(`city=${chooseCity}&brand=${chooseCar}`)
        } else if (chooseCity !== "Select Your City") {
            RedirectPage.yourCar("city=" + chooseCity)
        } else if (chooseCar !== "Choose Car Make") {
            RedirectPage.yourCar("brand=" + chooseCar)
        } else {
            RedirectPage.yourCar()
        }
    };
    return (
        <div >
            <Navbar />
            <div className='img-container'>
                <div className='home-heading'>

                    <h1>Find the Best Cars</h1>
                    <h3>Explore with ease-rent a car for convenient travel, whether it's a road trip or daily  commute.</h3>
                    <h4> Choose from a variety of vehicles to suit your needs.</h4>
                    <p></p>

                </div>
                <div style={{ display: "flex" }} className='searchBar-mainbody'>
                    <div className="hm-search-heading2">
                        <div className="dropdown">
                            <div className='fixSearchBtn'>
                                <CustomButton
                                    className="home-searchBtn-container"
                                    onClick={onFindBtn}
                                >{chooseCity}<i className="fas fa-caret-down dropIcon"></i>
                                </CustomButton>
                            </div>
                            <div className="dropdown-content1">
                                <p onClick={citySelect}>Surat</p>
                                <p onClick={citySelect}>Mumbai</p>
                                <p onClick={citySelect}>kolkata</p>
                                <p onClick={citySelect}>Bengaluru</p>
                                <p onClick={citySelect}>Ahmedabad</p>
                            </div>
                        </div>
                    </div>
                    <div className="hm-search-heading2">
                        <div className="dropdown">
                            <CustomButton
                                className="home-searchBtn-container"

                            >{chooseCar}<i className="fas fa-caret-down dropIcon"></i></CustomButton>
                            <div className="dropdown-content2 " >
                                <p onClick={carSelect}>Audi</p>
                                <p onClick={carSelect}>BMW</p>
                                <p onClick={carSelect}>Max</p>
                                <p onClick={carSelect}>Hyundai</p>
                                <p onClick={carSelect}>Tata motor</p>
                            </div>
                        </div>
                    </div>
                    <CustomButton className="home-findNow-container" onClick={onFindBtn}>Find Now</CustomButton>
                </div>

            </div>
            <div style={{ display: "flex" }}>
                <div className='hd-container'>
                    <img src="Image/check.png" alt="" style={{ height: "50px", marginLeft: "130px", marginTop: "25px" }} />
                    <h1 style={{ textAlign: "center", color: "white", fontSize: "25px" }}>Easy Booking</h1>
                    <p style={{ color: "white" }}>
                        Book a cab with ease.
                        Hassle-free transportation for all your needs.
                        Book your ride today and enjoy the ride!
                    </p>
                </div>
                <div className='hd-container2'>
                    <img src="Image/check.png" alt="" style={{ height: "50px", marginLeft: "130px", marginTop: "25px" }} />
                    <h1 style={{ textAlign: "center", color: "white", fontSize: "25px" }}>Ready To Ride?</h1>
                    <p style={{ color: "white" }}>
                        Ready to ride? Book your cab with ease and
                        enjoy hassle-free transportation. Book your
                        ride today and experience convenience!
                    </p>
                </div>
                <div className='hd-container2'>
                    <img src="Image/check.png" alt="" style={{ height: "50px", marginLeft: "130px", marginTop: "25px" }} />
                    <h1 style={{ textAlign: "center", color: "white", fontSize: "25px" }}>Affordable Pricing</h1>
                    <p style={{ color: "white" }}>
                        Ride affordably! Book your cab with us and
                        enjoy competitive prices. Book your ride
                        today and experience convenience without
                        breaking the bank!
                    </p>
                </div>

            </div>
            <div className='aboutus-conatainer'>
                <div className='text-conatainer'>
                    <h3 style={{ color: " #0067b8", marginBottom: "-15px", fontWeight: "500" }}>ABOUT US</h3>
                    <h1 style={{ fontWeight: "600", color: "#54595F" }}>BOOK ONE WAY & ROUND TRIP CABS</h1>
                    <p style={{ fontSize: "16px" }}>
                        At our cab booking company, we are passionate about providing our customers with safe, reliable,
                        and affordable transportation services. We believe that getting around should be easy and hassle-free,
                        which is why we have made it our mission to make transportation accessible to everyone.
                        Our company was founded with the goal of creating a better transportation experience for our customers.
                        We understand the importance of getting to your destination on time, and our team of experienced drivers are
                        committed to providing you with a smooth and comfortable ride.
                    </p>
                    <button type="button" className='btn-container'><a href="about-us" style={{ textDecoration: "none", color: "white" }}>KNOW MORE</a></button>
                </div>
                <div className='img-conatainer1'>
                    <img src="Image/car6.jpg" alt="" style={{ borderRadius: "20px", height: "95%" }} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
