import { Link } from "react-router-dom";
import Button from "./Button";
import gallery1 from "../images/gallery1.webp";
import gallery2 from "../images/gallery2.webp";
import gallery3 from "../images/gallery3.webp";
import gallery4 from "../images/gallery4.webp";
import gallery5 from "../images/gallery5.webp";
import gallery6 from "../images/gallery6.webp";
import gallery7 from "../images/gallery7.webp";
import gallery8 from "../images/gallery8.webp";
import gallery9 from "../images/gallery9.webp";
import gallery10 from "../images/gallery10.webp";
import gallery11 from "../images/gallery11.webp";
import gallery12 from "../images/gallery12.webp";
import Animation from "./Animation";

const Gallery = () => {
    return (
        <Animation>
            <div className="w-full mt-10vh flex flex-col items-center text-babyBlue-1500 relative">
                <div className="w-full max-w-1920 flex flex-col items-center">
                    <div className="w-full flex flex-col lg:flex-row">
                        <div className="w-full flex flex-col sm:flex-row lg:flex-row lg:w-1/2">
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={gallery1} alt="" />
                                <img className="mb-8" src={gallery2} alt="" />
                                <img className="mb-8" src={gallery3} alt="" />
                            </div>
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={gallery4} alt="" />
                                <img className="mb-8" src={gallery5} alt="" />
                                <img className="mb-8" src={gallery6} alt="" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col sm:flex-row lg:flex-row lg:w-1/2">
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={gallery7} alt="" />
                                <img className="mb-8" src={gallery8} alt="" />
                                <img className="mb-8" src={gallery9} alt="" />
                            </div>
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={gallery10} alt="" />
                                <img className="mb-8" src={gallery11} alt="" />
                                <img className="mb-8" src={gallery12} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/" className="mb-8 lg:mb-8">
                    <Button
                        text="Strona główna"
                        textSize="text-sm"
                        textColor="text-royalPink-50"
                        bgColor="bg-royalPink-400"
                        borderColor="border-royalPink-600"
                        padding="px-3 py-2"
                    />
                </Link>
            </div>
        </Animation>
    );
};

export default Gallery;
