import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import DogPola from "./DogPola";
import DogWilliam from "./DogWilliam";
import WhyUsDetails from "./WhyUsDetails";
import Gallery from "./Gallery";
import LitterA from "./LitterA";

const Routing = () => {
    const location = useLocation();
    return (
        <Routes key={location.pathname} location={location}>
            <Route path="/details/Pola" element={<DogPola />} />
            <Route path="/details/William" element={<DogWilliam />} />
            <Route path="/details/why-us" element={<WhyUsDetails />} />
            <Route path="/details/gallery" element={<Gallery />} />
            <Route path="/details/litter/a" element={<LitterA />} />
            <Route path="/" element={<App />} />
        </Routes>
    );
};

export default Routing;
