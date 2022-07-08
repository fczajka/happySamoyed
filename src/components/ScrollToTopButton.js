import { useState, useEffect } from "react";
const ScrollToTopButton = () => {
    const [toTop, setToTop] = useState(true);
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        if (window.scrollY > 0) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [toTop]);

    useEffect(() => {
        if (window.scrollY > 0) {
            console.log(window.scrollY);
            setVisibility(true);
        } else {
            setVisibility(false);
        }
        console.log(window.scrollY);
    }, [window.scrollY]);

    return (
        <button
            onClick={() => setToTop(!toTop)}
            className={`${
                visibility ? "fixed" : "hidden"
            } bottom-8 right-8 w-16 h-16 z-10 rounded-full bg-babyBlue-300 cursor-pointer hover:bg-royalPink-300 transition duration-300 ease-in-out`}
        >
            <div className="w-full h-full flex justify-center items-center text-babyBlue-900 hover:text-royalPink-900">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </button>
    );
};

export default ScrollToTopButton;
