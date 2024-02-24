// import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import RentNow from "./Pages/RentNow";
import Login from "./Pages/Login";
import YourCar from "./Pages/YourCar";
import BookNow from "./Pages/BookNow";
import BookingConfirm from "./Pages/BookingConfirm";
import CarBookingHistory from "./Pages/CarBookingHistory";
import Profile from "./Pages/Profile";
import UpdatePass from "./Pages/UpdatePass";

function App() {
  return (
    <div>
        {/* <Navbar /> */} 
      < BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/your-car" element={<YourCar />} />
          <Route path="/rent-now" element={<RentNow />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/booking-confirm" element={<BookingConfirm />} />
          <Route path="/CarBookingHistory" element={<CarBookingHistory/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/update-pass"element={<UpdatePass/>}/>

        </Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
