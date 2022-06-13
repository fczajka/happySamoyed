import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpenDogs, setIsOpenDogs] = useState(false);
    const [isOpenLitters, setIsOpenLitters] = useState(false);
    const refDogs = useRef();
    const refLitters = useRef();

    const onMouseEnterDogs = () => {
        window.innerWidth > 1024 && setIsOpenDogs(true);
    };

    const onMouseLeaveDogs = () => {
        window.innerWidth > 1024 && setIsOpenDogs(false);
    };

    const onMouseEnterLitters = () => {
        window.innerWidth > 1024 && setIsOpenLitters(true);
    };

    const onMouseLeaveLitters = () => {
        window.innerWidth > 1024 && setIsOpenLitters(false);
    };

    return (
        <header className="w-full relative py-4 text-babyBlue-1500 bg-babyBlue-0 z-10 shadow-md xsm:h-8vh xsm:py-0">
            <div className="flex w-full h-full mx-auto max-w-1920 items-center">
                <div className="basis-full flex justify-center items-center lg:basis-7/12">
                    <h1 className="text-center tracking-wide font-titan-one text-2xl mx-4 my-1 xsm:my-0 xsm:text-4xl">
                        <Link to="/">Sczęśliwy Puszek</Link>
                    </h1>
                </div>
                <ul className="hidden justify-center space-x-4 lg:flex lg:basis-5/12">
                    <li className="font-radio-canada">
                        <Link to="/">Strona główna</Link>
                    </li>
                    <li ref={refDogs} className="font-radio-canada">
                        <button
                            type="button"
                            className="flex"
                            aria-haspopup="menu"
                            aria-expanded={isOpenDogs ? "true" : "false"}
                            onClick={() => setIsOpenDogs(!isOpenDogs)}
                            onMouseEnter={onMouseEnterDogs}
                            onMouseLeave={onMouseLeaveDogs}
                        >
                            Psy
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mt-1 ml-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <ul
                            onMouseEnter={onMouseEnterDogs}
                            onMouseLeave={onMouseLeaveDogs}
                            className={`absolute bg-babyBlue-0 pt-6 pb-4 z-10 rounded-md shadow-md ${
                                isOpenDogs ? "block" : "hidden"
                            }`}
                        >
                            <li className="hover:bg-royalPink-100">
                                <Link
                                    to="/details/Pola"
                                    className="py-0.5 px-4 block"
                                >
                                    Pola
                                </Link>
                            </li>
                            <li className="hover:bg-babyBlue-100">
                                <Link
                                    to="/details/William"
                                    className="py-0.5 px-4 block"
                                >
                                    William
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li ref={refLitters} className="font-radio-canada">
                        <button
                            type="button"
                            className="flex"
                            aria-haspopup="menu"
                            aria-expanded={isOpenLitters ? "true" : "false"}
                            onClick={() => setIsOpenLitters(!isOpenLitters)}
                            onMouseEnter={onMouseEnterLitters}
                            onMouseLeave={onMouseLeaveLitters}
                        >
                            Mioty
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mt-1 ml-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <ul
                            onMouseEnter={onMouseEnterLitters}
                            onMouseLeave={onMouseLeaveLitters}
                            className={`absolute bg-babyBlue-0 pt-6 pb-4 z-10 rounded-md shadow-md ${
                                isOpenLitters ? "block" : "hidden"
                            }`}
                        >
                            <li className="hover:bg-babyBlue-100">
                                <Link to="/" className="py-0.5 px-4 block">
                                    Miot A
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="font-radio-canada">
                        <Link to="/details/gallery">Galeria</Link>
                    </li>
                    <li className="font-radio-canada">
                        <a href="#contact">Kontakt</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
