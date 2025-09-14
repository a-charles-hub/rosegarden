import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Header from './Header/Header.jsx';
import Overview from "./Overview/Overview.jsx";

// Lazy load pages
const Menu = lazy(() => import('./Menu/Menu.jsx'));
const Accommodations = lazy(() => import('./Accommodations/Accommodations.jsx'));
const Amenities = lazy(() => import('./Amenities/Amenities.jsx'));
const Booking = lazy(() => import('./Booking/Booking.jsx'));
const Auth = lazy(() => import('./Auth/Auth.jsx'));

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Overview />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/accommodations" element={<Accommodations />}/>
        <Route path="/amenities" element={<Amenities />}/>
        <Route path="/booking" element={<Booking />}/>
        <Route path="/auth/login" element={<Auth />}/>
      </Routes>
    </Router>
  );
}

export default App
