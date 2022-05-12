import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Header from "./components/Header";
import DogPola from "./components/DogPola";
import DogWilliam from "./components/DogWilliam";
import WhyUsDetails from "./components/WhyUsDetails";
import Gallery from "./components/Gallery";

const Index = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/details/Pola" element={<DogPola />} />
                    <Route path="/details/William" element={<DogWilliam />} />
                    <Route path="/details/why-us" element={<WhyUsDetails />} />
                    <Route path="/details/gallery" element={<Gallery />} />
                    <Route path="/" element={<App />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Index />);
