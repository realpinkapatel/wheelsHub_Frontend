import './index.modul.css'
import Navbar from '../../Components/Navbar';

function CarBookingHistory() {

    return (
        <>
            <Navbar />
            <div className="d-flex body-main">
                <div className="main-rides"  >
                    <h3 className='trip-head'>My Trip</h3>
                    <div id='my-scroll' className='horizontal-scroll'   >
                        <div className='main-text' >
                            <div className='list-head'>
                                <h5 className='list-data'>Date</h5>
                                <h5 className='list-car'>Car</h5>
                                <h5 className='list-from'>From</h5>
                                <h5 className='list-crn'>CRN</h5>
                                <h5 className='list-km'>Km </h5>
                                <h5 className='list-total'>Total</h5>
                                <h5 className='list-status'>Status</h5>
                            </div>
                            {/* <h3 className='not-status'>Looks like you haven't taken a trip yet.</h3> */}
                            <ul>
                                <div>
                                    <div className='item-frame'>
                                        <table className='cb-table'>
                                            <tr className='table-item'>
                                                <td>01-01-2023</td>
                                                <td className='car-item'><img src="/image/car_img.jpg" alt="" className='img-car' id='car-img' />Max</td>
                                                <td className='car-from'> <i className="fas fa-map-marker mx-2"></i>dindoli</td>
                                                <td className='car-phone'>7487059275 </td>
                                                <td className='car-km my-2'>10</td>
                                                <td className='car-total'>₹12000</td>
                                                <td> <span className='status-item'>successfully</span></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarBookingHistory;