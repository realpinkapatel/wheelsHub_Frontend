import './index.modul.css'


const footer=()=>{
    
    return(
        <div className='info-container'>
        <h3 style={{ paddingTop: "10px", textAlign: "center", fontWeight: "600", color: "white", fontSize: "22px" }}>OM CAR RENTAL</h3>
        <p style={{ textAlign: "center", color: "white" }}>One Way Cab, Round Trip, Outstation Tours, City Tours, etc.</p>
        <p style={{ borderBottom: "10px solid white", width: "35%", marginTop: "1%", marginLeft: "33%" }}></p>
        <h3 style={{ textAlign: "center", fontWeight: "600", color: "white", fontSize: "22px" }}>OFFICE ADDRESS</h3>
        <p style={{ textAlign: "center", color: "white" }}>KAHERU DOULATPUR ROAD, , KAHERU DOULATPUR ROAD, DHURI, SURAT - 394210</p>

        <div style={{ display: "flex", color: "white" }}>
            <div className='email-conatainer'>
                <img src="Image/email-icon.png" alt="" style={{ height: "50px" }} />
                <h3 style={{ fontSize: "22px" }}>Email Address</h3>
                <p>info@omcarrental.in</p>
            </div>
            <div className='email-conatainer1'>
                <img src="Image/email-icon.png" alt="" style={{ height: "50px" }} />
                <h3 style={{ fontSize: "22px" }}>Email Address</h3>
                <p>support@omcarrental.in</p>
            </div>
            <div className='phone-conatainer'>
                <img src="Image/phone.png" alt="" style={{ height: "50px" }} />
                <h3 style={{ fontSize: "22px" }}>Phone Number</h3>
                <p>91-7487059271</p>
            </div>
        </div>
        <hr />
        <div className='bottomHeading'>
            <p style={{ textAlign: "center", color: "white", fontWeight: "600", fontSize: "18px" }}>OM CAR RENTAL</p>
        </div>
    </div>
    )
}

export default footer;