import './index.modul.css'
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Button from "../../Components/Elements/CustomButton";
import CustomParagraph from '../../Components/Elements/CustomParagraph';
import CustomHeading from '../../Components/Elements/CustomHeading';
import CustomImg from '../../Components/Elements/CustomImg';
import appConfig from '../../Constants/appConfig';
import AppApi from '../../Services/AppApi';
import CustomChekBox from '../../Components/Elements/CustomCheckBox';

let value = ""
function YourCar() {
    const [carListData, setCarListData] = useState([]);
    const [liked, setLiked] = useState(false);
    const [priceRange, setPriceRange] = useState("100");
    // const [multiCitySelect, setMultiCitySelect] = useState();

    // const [isCheked, setIsCheked] = useState()
    // console.log("isCheked ==== >", isCheked) // undefine

    const [carSeaterList, setCarSeaterList] = useState([
        {
            title: "4 Seats",
        },
        {
            title: "5 Seats",
        },
        {
            title: "6 Seats",
        },
        {
            title: "6+ Seats",
        },
        {
            title: "All",
        },
    ]);
    const [carBrandList, setCarBrandList] = useState([
        {
            title: "Audi",
        },
        {
            title: "Max",
        },
        {
            title: "Hyundai",
        },
        {
            title: "Tata motor",
        },
        {
            title: "All",
        },
    ])

    const [carCityList, setCarList] = useState([
        {
            title: "Surat",
        },
        {
            title: "Mumbai",
        },
        {
            title: "Kolkata",
        },
        {
            title: "Bangaluru",
        },
        {
            title: "Ahmedabad",
        },
        {
            title: "All"
        }
    ]);

    const useEffectFun = () => { // arrow function  
        async function fetchCarData() {
            let fetchCarData
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const city = urlParams.get("city");
                const carBrand = urlParams.get("brand")

                if (city && carBrand) {
                    fetchCarData = await AppApi.userCarList(`city=${city}&brand=${carBrand}`);
                }
                else if (city) {
                    fetchCarData = await AppApi.userCarList(`city=${city}`);
                } else if (carBrand) {
                    fetchCarData = await AppApi.userCarList(`brand=${carBrand}`)
                }
                else {
                    fetchCarData = await AppApi.userCarList();
                }
                setCarListData(fetchCarData.data);
                // console.log("fetchCarData ==== >",carListData)
            } catch (error) {
                console.error("Error fetching car data:", error);
            }
        }
        fetchCarData(); // call the function 
    }
    useEffect(useEffectFun, []); // Empty dependency array ensures the effect runs only once
    const handleLike = () => {
        setLiked(!liked);
    };

    let fetchCarDataResponse;
    async function fetchCarDataByFilter(data, key) {

        if (data && data !== "all") {
            data = data.toLowerCase()
            fetchCarDataResponse = await AppApi.userCarList(key + `=${data}`);
        } else {
            fetchCarDataResponse = await AppApi.userCarList();
        }
        setCarListData(fetchCarDataResponse.data);
    }

    const onSeatsHandleClick = async (event, item, index) => {
        try {
            value = event.target.value
            carSeaterList[index].isCheked = carSeaterList[index].isCheked === true ? false : true;
            setCarSeaterList(carSeaterList);
            if (carSeaterList[index].isCheked) {
                const checkedDataList = carSeaterList
                    .filter(item => item.isCheked) // filter only chacked data
                    .map(item => item.title.split(' ')[0]) // get title value 
                if (checkedDataList && checkedDataList.length) {
                    const filterSeatData = { // create object store value
                        filterSeatData: {
                            seatList: checkedDataList
                        }
                    }
                    const fetchCarDataResponse = await AppApi.userCarList("", filterSeatData);
                    setCarListData(fetchCarDataResponse.data);
                } else {
                    fetchCarDataByFilter(value, 'seater');
                }
            } else {
                fetchCarDataResponse = await AppApi.userCarList();
                setCarListData(fetchCarDataResponse.data);
            }
        } catch (error) {
            console.log("error ==== >", error)
        }
    }
    const onBrandHandleClick = async (event, item, index) => {
        value = event.target.value
        carBrandList[index].isCheked = carBrandList[index].isCheked === true ? false : true
        setCarBrandList(carBrandList)

        if (carBrandList[index].isCheked) {
            const checkedDataList = carBrandList // all brand List store in a variable
                .filter(item => item.isCheked) // checkedDataList filter data from checkedDataList and return isCheked data 
                .map(item => item.title) // access one data from object like {title: 'Kolkata', isCheked: true} 
            if (checkedDataList && checkedDataList.length) {
                const filterBrand = {
                    filterBrandData: {
                        brandList: checkedDataList
                    }
                }
                const fetchCarDataResponse = await AppApi.userCarList("", filterBrand);
                setCarListData(fetchCarDataResponse.data);
            }
            else {

                fetchCarDataByFilter(value, 'brand');
            }
        } else {
            fetchCarDataResponse = await AppApi.userCarList();
            setCarListData(fetchCarDataResponse.data);
        }
    }
    const onCityHandleClick = async (event, item, index) => {
        value = event.target.value
        carCityList[index].isCheked = carCityList[index].isCheked === true ? false : true
        setCarList(carCityList)

        if (carCityList[index].isCheked) {
            const checkedDataList = carCityList
                .filter(item => item.isCheked) // checkedDataList filter data from checkedDataList and return isCheked data 
                .map(item => item.title) // access one data from object like {title: 'Kolkata', isCheked: true} 
            if (checkedDataList && checkedDataList.length) {
                const filterData = {
                    filterData: {
                        cityList: checkedDataList
                    }
                }
                const fetchCarDataResponse = await AppApi.userCarList("", filterData);
                setCarListData(fetchCarDataResponse.data);
            } else {
                fetchCarDataByFilter(value, 'city');
            }
        } else {
            fetchCarDataResponse = await AppApi.userCarList();
            setCarListData(fetchCarDataResponse.data);
        }
    }

    const carPriceRange = (event) => {
        value = event.target.value
        setPriceRange(value)
        fetchCarDataByFilter(value, "price")
    }

    const onBtnClick = async (item) => {
        window.location = `book-now?car_id=${item._id}`
    }

    return (
        <>
            <Navbar />
            <div className='yourCar-mainbody-conatainer'>
                <CustomParagraph>.</CustomParagraph>
                <div className="yourCar-body-conatainer">
                    <CustomHeading className="yourCar-headingPage">POPUPLAR CARS</CustomHeading>
                    <CustomParagraph>BOOK HATCHBACK, SEDAN, MUV/SUV, PREMIUM OR LUXURY CABS</CustomParagraph>
                </div>
                <div className="yourCar-filterbar-container" >

                    <div className='car-filter-group' >
                        <CustomParagraph
                            className="vehicle-heading"
                        >Car Seats</CustomParagraph>
                        {
                            carSeaterList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <CustomChekBox
                                            onClick={(evt) => { onSeatsHandleClick(evt, item, index) }}
                                            value={item.title.split(" ")[0].toLocaleLowerCase()}
                                        >{item.title}</CustomChekBox>
                                    </div>

                                );
                            })
                        }
                    </div>
                    <div className='car-filter-group'>
                        <CustomParagraph
                            className="vehicle-heading"
                        >Car Brand</CustomParagraph>
                        {
                            carBrandList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <CustomChekBox
                                            onClick={(evt) => {
                                                onBrandHandleClick(evt, item, index)
                                                console.log("item ==== >", item)
                                            }}
                                            value={item.title.toLocaleLowerCase()}
                                        >{item.title}</CustomChekBox>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='car-filter-group' >
                        <CustomParagraph
                            className="vehicle-heading"
                        >City</CustomParagraph>
                        {
                            carCityList.map((item, index) => {
                                return (
                                    <div>
                                        <CustomChekBox
                                            onClick={(e) => {
                                                onCityHandleClick(e, item, index)
                                                // console.log("item  ===== >", item)
                                            }}
                                            value={item.title.toLocaleLowerCase()}
                                        >{item.title}</CustomChekBox>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='car-filter-group'>
                        <CustomParagraph
                            className="vehicle-heading"
                        >Price Range</CustomParagraph>
                        <input type='range' min='100' max="1000" step="10" onChange={carPriceRange} />
                        <CustomParagraph>{priceRange}</CustomParagraph>
                    </div>
                </div>
                <div className="yr-itemList-body" >
                    {(carListData && carListData.length) ? carListData.map((item, index) => {
                        return (
                            <div className="yourCar-itemList-container" key={index} >
                                {item.img && <CustomImg className='yourCar-img-container' src={appConfig.BASE_URL + `carList/${item.img}`} alt="" />}
                                <div style={{ display: "flex", marginLeft: "10%" }}>
                                    <div className='your-car-likeBtn-container1'>
                                        <CustomParagraph className='yourCar-itemList-title' >{item.brand ? item.brand.toUpperCase() : ""}</CustomParagraph>
                                    </div>
                                    <div className='your-car-likeBtn-container'>
                                        <i className="fa fa-heart iconStyle" style={{ color: liked ? 'red' : '#cccccc' }} onClick={handleLike}></i>
                                    </div>
                                </div>
                                <div className='yourCar-itemList-colotxt'>
                                    <div className='left-text'>
                                        <CustomParagraph  >Exterior : {item.exteriorClr ? item.exteriorClr : ""}</CustomParagraph>
                                    </div>
                                    <div className='rigth-text'>
                                        <CustomParagraph >Interior : {item.interiorClr ? item.interiorClr : ""}</CustomParagraph>
                                    </div>
                                </div>
                                <div className='yourCar-itemList-colotxt'>
                                    <div className='left-text'>
                                        <CustomParagraph>City :{item.city ? item.city : "NAN"}</CustomParagraph>
                                    </div>
                                    <div className='rigth-text'>
                                        <CustomParagraph >Seats : {item.seater}</CustomParagraph>
                                    </div>
                                </div>
                                <CustomParagraph className="yourCar-rate-container" />
                                <div style={{ display: "flex" }}>
                                    <CustomParagraph className='yourCar-itemList-color'>Daily rate : </CustomParagraph>
                                    <CustomParagraph className='yourCar-itemList-price'>₹{item.dailyRent ? item.dailyRent : 0}</CustomParagraph>
                                </div>
                                <Button type="button" className='YourCar-btn-container' value="ednejdj" onClick={() => { onBtnClick(item) }}>RENT NOW </Button>
                            </div>
                        )
                    }) : <span>Car not found</span>
                    }
                </div>
            </div>
        </>
    )
}

export default YourCar; 