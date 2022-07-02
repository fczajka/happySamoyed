import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
    const [isOpenDogs, setIsOpenDogs] = useState(false);
    const [isOpenLitters, setIsOpenLitters] = useState(false);
    const refDogs = useRef();
    const refLitters = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (
                isOpenDogs &&
                refDogs.current &&
                !refDogs.current.contains(event.target)
            ) {
                setIsOpenDogs(false);
            } else if (
                isOpenLitters &&
                refLitters.current &&
                !refLitters.current.contains(event.target)
            ) {
                setIsOpenLitters(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [isOpenDogs, isOpenLitters]);
    return (
        <nav className="fixed w-full h-8vh bottom-0 text-babyBlue-1500 bg-babyBlue-0 lg:hidden">
            <ul className="flex h-full justify-evenly items-center basis-full text-sm xsm:text-base">
                <li ref={refDogs} className="flex basis-1/4 justify-center">
                    <button
                        type="button"
                        className="flex"
                        aria-haspopup="menu"
                        aria-expanded={isOpenDogs ? "true" : "false"}
                        onClick={() => setIsOpenDogs(!isOpenDogs)}
                    >
                        <div className="flex flex-col items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                viewBox="0 0 576 512"
                                fill="currentColor"
                            >
                                <path d="M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z" />
                            </svg>
                            Psy
                        </div>
                    </button>
                    <ul
                        className={`absolute bg-babyBlue-0 py-2 bottom-20 z-10 rounded-md shadow-md ${
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
                <li ref={refLitters} className="flex basis-1/4 justify-center">
                    <button
                        type="button"
                        className="flex"
                        aria-haspopup="menu"
                        aria-expanded={isOpenLitters ? "true" : "false"}
                        onClick={() => setIsOpenLitters(!isOpenLitters)}
                    >
                        <div className="flex flex-col items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                            >
                                <path d="M256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.88 71.74-55.75C447.1 346.8 335.4 224 256 224zM108.8 211.4c-10.37-34.62-42.5-57.12-71.62-50.12S-7.104 202 3.27 236.6C13.64 271.3 45.77 293.8 74.89 286.8S119.1 246 108.8 211.4zM193.5 190.6c30.87-8.125 46.37-49.1 34.5-93.37s-46.5-71.1-77.49-63.87c-30.87 8.125-46.37 49.1-34.5 93.37C127.9 170.1 162.5 198.8 193.5 190.6zM474.9 161.3c-29.12-6.1-61.25 15.5-71.62 50.12c-10.37 34.63 4.75 68.37 33.87 75.37c29.12 6.1 61.12-15.5 71.62-50.12C519.1 202 503.1 168.3 474.9 161.3zM318.5 190.6c30.1 8.125 65.62-20.5 77.49-63.87c11.87-43.37-3.625-85.25-34.5-93.37c-30.1-8.125-65.62 20.5-77.49 63.87C272.1 140.6 287.6 182.5 318.5 190.6z" />
                            </svg>
                            Mioty
                        </div>
                    </button>
                    <ul
                        className={`absolute bg-babyBlue-0 py-2 bottom-20 z-10 rounded-md shadow-md ${
                            isOpenLitters ? "block" : "hidden"
                        }`}
                    >
                        <li className="hover:bg-babyBlue-100">
                            <Link
                                to="/details/litter/a"
                                className="py-0.5 px-4 block"
                            >
                                Miot A
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="flex basis-1/4  justify-center">
                    <Link to="/" className="flex flex-col items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 572 512"
                            fill="currentColor"
                        >
                            <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
                        </svg>
                        Główna
                    </Link>
                </li>
                <li className="flex basis-1/4 justify-center">
                    <Link
                        to="/details/gallery"
                        className="flex flex-col items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Galeria
                    </Link>
                </li>
                <li className="flex basis-1/4 justify-center">
                    <a href="#contact" className="flex flex-col items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Kontakt
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MobileNavbar;
