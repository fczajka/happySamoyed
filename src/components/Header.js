import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex fixed top-0 items-center w-full h-10vh text-babyBlue-600 bg-babyBlue-0 z-10">
            <div className="basis-7/12 flex justify-center items-center">
                <Link to="/">
                    <h1 className="name text-center tracking-wide font-oleo-script text-4xl">
                        Happy Samoyed
                    </h1>
                </Link>
            </div>
            <ul className="flex justify-center space-x-4 basis-5/12">
                <li className="font-radio-canada">Strona główna</li>
                <li className="font-radio-canada">Psy</li>
                <li className="font-radio-canada">Galeria</li>
                <li className="font-radio-canada">Kontakt</li>
            </ul>
        </header>
    );
};

export default Header;
