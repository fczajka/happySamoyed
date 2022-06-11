import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index == 2) {
            setIndex(0);
        } else if (index == -1) {
            setIndex(1);
        }
    }, [index]);

    useEffect(() => {
        const change = setTimeout(() => setIndex(index == 0 ? 1 : 0), 12000);
        return () => clearTimeout(change);
    }, [index]);

    return (
        <div className="w-full h-92vh relative mx-auto my-0 overflow-hidden">
            <div
                className="w-full h-92vh whitespace-nowrap transition duration-700 ease-in-out"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                <div className="w-full h-92vh text-center whitespace-nowrap bg-landing-photo-1 bg-l-50-0 bg-cover bg-no-repeat inline-flex items-center justify-start lg:bg-center">
                    <div className="w-full font-radio-canada text-babyBlue-0 text-center lg:ml-16 lg:w-auto">
                        <h2 className="text-3xl xsm:text-4xl">
                            Weź jednego ze sobą
                        </h2>
                        <h3 className="text-lg mt-2 xsm:text-xl">
                            I nie każ sobie dłużej czekać
                        </h3>
                        <div className="my-5 mx-auto rounded-md text-babyBlue-50 bg-babyBlue-400 border-babyBlue-600 border-b-4 w-min hover:border-b-0 hover:translate-y-1 hover:mb-6">
                            <a
                                href="#whyUs"
                                className="w-full block h-full px-3 py-2 text-sm font-radio-canada font-bold tracking-wider "
                            >
                                Sprawdź!
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full h-92vh text-center whitespace-nowrap bg-landing-photo-2 bg-l-50-0 bg-cover bg-no-repeat inline-flex items-center justify-start lg:bg-center">
                    <div className="w-full font-radio-canada text-babyBlue-0 text-center lg:ml-16 lg:w-auto">
                        <h2 className="text-3xl xsm:text-4xl">
                            Mam na imię William
                        </h2>
                        <h3 className="text-lg mt-2 xsm:text-xl">
                            Jestem reproduktorem
                        </h3>
                        <div className="my-5 mx-auto rounded-md text-babyBlue-50 bg-babyBlue-400 border-babyBlue-600 border-b-4 w-min hover:border-b-0 hover:translate-y-1 hover:mb-6">
                            <Link
                                to="/details/William"
                                className="w-full block h-full px-3 py-2 text-sm font-radio-canada font-bold tracking-wider "
                            >
                                Poczytaj o mnie!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-full max-w-1920 bottom-28 h-4 lg:bottom-12">
                <ul className="flex justify-center text-babyBlue-50">
                    <li className="bg-babyBlue-1500 mx-6 p-2 rounded-full">
                        <button
                            className="block"
                            onClick={() => setIndex(index - 1)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </li>
                    <li className="bg-babyBlue-1500 mx-6 p-2 rounded-full">
                        <button
                            className="block"
                            onClick={() => setIndex(index + 1)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Landing;
