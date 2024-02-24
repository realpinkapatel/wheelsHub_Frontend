import './index.modul.css'
import Navbar from '../../Components/Navbar';
import { useEffect, useState } from 'react';
import AppApi from '../../Services/AppApi';


const BookingConfirm = () => {
    const [carBookingData, setCarBookingData] = useState();
    const [isChecked, setIsChecked] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    useEffect(() => {
        async function getCarData() {
            try {
                const searchParams = new URLSearchParams(window.location.search);
                const vehicleNum = searchParams.get('vehicle_num');

                if (vehicleNum) {
                    const fetchCarData = await AppApi.userCarList(`vehicle_num=${vehicleNum}`);
                    const getData = fetchCarData.data
                    if (getData && getData.length) {
                        getData.forEach(item => {
                            setCarBookingData(item)
                            console.log("testing Data ==== >", item)
                        });
                    }
                }
            } catch (error) {
                console.log("error ====>", error);
            }
        }

        getCarData();
    }, [])// Empty dependency array means this effect runs once on mount
    const pickUpDate = new Date(carBookingData && carBookingData.pickUpDate); // Create an instance representing the current date and time
    const returnDate = new Date(carBookingData && carBookingData.returnDate); // Date object is a built-in constructor function that is used to create instances representing dates and times.
    const timeDifference = returnDate - pickUpDate;
    const totalDay = timeDifference / (1000 * 60 * 60 * 24) + 1
    console.log("calculate the date ==== >", totalDay)

    const OnCheckBoxHandle = (e) => {
        console.log("eee====>", e)
        setIsChecked(!isChecked)
        console.log("isChecked ==== >", isChecked)
    }
    let isSuccess = true
    const onBtnClick = () => {
        if (isChecked) {
            setErrorMsg("")
        } else {
            setErrorMsg("Check the term and condition")
            isSuccess = false
        }
    }
    const totalCost = carBookingData && carBookingData.dailyRent * totalDay;
    return (
        <>
            <Navbar />
            <div className="main-screen">
                <div className='display-contant'>

                    <div className='car-del1' >
                        <div className='my-car-name'>
                            <img src="image/ic_mini.png" alt="" style={{ width: "40px" }} />
                            <h5 >{carBookingData && carBookingData.brand.toUpperCase()}</h5>
                        </div>
                        <div className='add-del'>
                            <p className='pragraph'>Booking Date :- </p>
                            <label htmlFor="" className='mx-3'> {carBookingData && carBookingData.pickUpDate} To {carBookingData && carBookingData.returnDate}</label>
                            <p className='pragraph'>PickUp Location :- </p>
                            <label htmlFor="" className='mx-3'> {carBookingData && carBookingData.pickUpLocation}</label>
                            <p className='pragraph'>PickUp Time :- </p>
                            <label htmlFor="" className='mx-3'> {carBookingData && carBookingData.pickUpTime}</label>
                        </div>
                        <div className='pay-del'>
                            <h5> Booked car for {totalDay} day</h5>

                            <h3>₹ {totalCost}</h3>
                            <h6> BASE FARE</h6>
                            <p></p>
                            <div className='addtional'>
                                <div className='info'>
                                    <h2>₹{carBookingData && carBookingData.dailyRent}</h2>
                                    <h2>Additional Day</h2>
                                    <h2>Fare After your due date</h2>
                                </div>
                                <p></p>
                                <div className='info1'>
                                    <h2>₹2/min</h2>
                                    <h2>Additional Ride Time Fare </h2>
                                    <h2>After first 1 hours</h2>
                                </div>
                            </div>

                        </div>
                        <div className='show-del'>
                            <button>See terms and Conditions</button>
                            <div className='notes'>

                                <div>
                                    <p>Rental can be used for local travels only, package cannot be changed after booking is confirmed.</p>
                                    <p>For usage beyond selected package,additional fare will be application as per rates rates above.</p>
                                    <p>Base fare amount is the minimum bill amount a customer has to pay for the package.</p>
                                </div>
                                <div style={{ margin: "0.3rem" }}>

                                    <input type="checkbox"
                                        onClick={OnCheckBoxHandle}
                                        checked={isChecked}
                                    />

                                    <span className='mx-2'>

                                        I accept term and condition
                                    </span>
                                    <span style={{ marginLeft: "1rem", color: "red" }}>{errorMsg}</span>
                                </div>
                            </div>
                        </div>
                        <div className='book'>
                            No advance payment required for booking
                        </div>
                        <div className='cashPay'>
                            <h5>PAY BY </h5>
                            <img src="image/rupeeIcon.jpeg" alt="scfdsf" style={{ width: "20px" }} /><span >{totalCost}</span>
                            <h4>Cash</h4>
                        </div>
                        <button className='btn-contine' onClick={onBtnClick}>Continue</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default BookingConfirm;