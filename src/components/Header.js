import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex fixed top-0 items-center w-full h-min py-4 text-babyBlue-1500 bg-babyBlue-0 z-10 xsm:py-0 xsm:h-10vh">
            <div className="basis-full flex justify-center items-center lg:basis-7/12">
                <Link to="/">
                    <h1 className="name text-center tracking-wide font-titan-one text-4xl mx-4">
                        Happy Samoyed
                    </h1>
                </Link>
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
        </header>
    );
};

export default Header;
