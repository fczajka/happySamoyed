import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed top-0 w-full py-4 text-babyBlue-1500 bg-babyBlue-0 z-10 xsm:h-8vh xsm:py-0">
            <div className="flex w-full h-full mx-auto max-w-1920 items-center">
                <div className="basis-full flex justify-center items-center lg:basis-7/12">
                    <h1 className="text-center tracking-wide font-titan-one text-4xl mx-4">
                        <Link to="/">Sczęśliwy Puszek</Link>
                    </h1>
                </div>
                <ul className="hidden justify-center space-x-4 lg:flex lg:basis-5/12">
                    <li className="font-radio-canada">
                        <Link to="/">Strona główna</Link>
                    </li>
                    <li className="font-radio-canada">Psy</li>
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
