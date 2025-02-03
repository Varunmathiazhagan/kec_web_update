import React from "react"; 
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParentPage from "./components/ParentPage"; 
import HomePage from "./components/HomePage"; 
import Event from "./Event";
import Placementlogo from "./Placementlogo";
import AchievementsCarousel from "./AchievementsCarousel"
import "./index.css";




export default function App() {
  const location = useLocation(); // Get the current route path

  return (
    <>
      <Navbar /> {/* Include Navbar on all pages */}
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for Parent Page */}
        <Route path="/parent" element={<ParentPage />} />
      </Routes>

      {/* Show Event and Placementlogo only on HomePage */}
      {location.pathname === "/" && (
        <>
        <AchievementsCarousel />
          <Event />
          <Placementlogo />
         
        </>
      )}
    </>
  );
}