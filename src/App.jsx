import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Header from './Header/Header.jsx';
import Overview from "./Overview/Overview.jsx";
import Rooms from "./Rooms/Rooms.jsx";

// Lazy load pages
const Menu = lazy(() => import('./Menu/Menu.jsx'));
const Accommodations = lazy(() => import('./Accommodations/Accommodations.jsx'));
const Amenities = lazy(() => import('./Amenities/Amenities.jsx'));
const Booking = lazy(() => import('./Booking/Booking.jsx'));
const Auth = lazy(() => import('./Auth/Auth.jsx'));
const HotelRooms = lazy(() => import('./Rooms/HotelRooms.jsx'));

function App() {
  return (
    <Router>
      <HeaderWrapper />
      <Routes>
        <Route path="/" element={<Overview />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/accommodations" element={<Accommodations />}/>
        <Route path="/amenities" element={<Amenities />}/>
        <Route path="/booking" element={<HotelRooms />}/>
        <Route path="/auth/login" element={<Booking />}/>
      </Routes>
    </Router>
  );
}

function HeaderWrapper() {
  const location = useLocation();
  const hideHeader = location.pathname === "/booking"; // hide only for /booking
  return !hideHeader ? <Header /> : null;
}

export default App
