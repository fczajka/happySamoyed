import Pola from "../images/Pola.webp";
import William from "../images/William.webp";
import Animation from "./Animation";

const Gallery = () => {
    return (
        <Animation>
            <div className="w-full flex flex-col items-center text-babyBlue-1500 p-12">
                <div className="w-full max-w-1920 flex flex-col items-center">
                    <h2 className="font-titan-one tracking-wide text-4xl mb-20">
                        Pola
                    </h2>
                    <div className="w-full flex flex-col lg:flex-row">
                        <div className="w-full flex flex-col sm:flex-row lg:flex-row lg:w-1/2">
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={Pola} alt="" />
                                <img className="mb-8" src={Pola} alt="" />
                                <img className="mb-8" src={Pola} alt="" />
                            </div>
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={William} alt="" />
                                <img className="mb-8" src={William} alt="" />
                                <img className="mb-8" src={William} alt="" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col sm:flex-row lg:flex-row lg:w-1/2">
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={Pola} alt="" />
                                <img className="mb-8" src={Pola} alt="" />
                                <img className="mb-8" src={Pola} alt="" />
                            </div>
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={William} alt="" />
                                <img className="mb-8" src={William} alt="" />
                                <img className="mb-8" src={William} alt="" />
                            </div>
                        </div>
                    </div>
                    <h2 className="font-titan-one tracking-wide text-4xl m-12 mb-20">
                        William
                    </h2>
                    <div className="w-full flex flex-col lg:flex-row">
                        <div className="w-full flex flex-col sm:flex-row lg:flex-row lg:w-1/2">
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={Pola} alt="" />
                                <img className="mb-8" src={Pola} alt="" />
                                <img className="mb-8" src={Pola} alt="" />
                            </div>
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={William} alt="" />
                                <img className="mb-8" src={William} alt="" />
                                <img className="mb-8" src={William} alt="" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col sm:flex-row lg:flex-row lg:w-1/2">
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={Pola} alt="" />
                                <img className="mb-8" src={Pola} alt="" />
                                <img className="mb-8" src={Pola} alt="" />
                            </div>
                            <div className="w-full xsm:px-4">
                                <img className="mb-8" src={William} alt="" />
                                <img className="mb-8" src={William} alt="" />
                                <img className="mb-8" src={William} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Animation>
    );
};

export default Gallery;
