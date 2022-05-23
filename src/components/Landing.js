import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const change = setTimeout(() => setIndex(index == 0 ? 1 : 0), 5000);
        return () => clearTimeout(change);
    }, [index]);

    return (
        <div className="mx-auto my-0 overflow-hidden">
            <div
                className="w-full whitespace-nowrap transition duration-700 ease-in-out"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                <div
                    key={0}
                    className="w-full h-screen text-center whitespace-nowrap bg-landing-photo-1 bg-l-50-0 bg-cover bg-no-repeat inline-flex items-center justify-start lg:bg-center"
                >
                    <div className="w-full font-radio-canada text-babyBlue-0 text-center lg:ml-16 lg:w-auto">
                        <h2 className="text-4xl">Weź jednego ze sobą</h2>
                        <h3 className="text-xl mt-2">
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
                <div
                    key={1}
                    className="w-full h-screen text-center whitespace-nowrap bg-landing-photo-2 bg-l-50-0 bg-cover bg-no-repeat inline-flex items-center justify-start lg:bg-center"
                >
                    <div className="w-full font-radio-canada text-babyBlue-0 text-center lg:ml-16 lg:w-auto">
                        <h2 className="text-4xl">Mam na imię William</h2>
                        <h3 className="text-xl mt-2">Jestem reproduktorem</h3>
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
        </div>
    );
};

export default Landing;
