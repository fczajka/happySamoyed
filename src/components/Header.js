const Header = () => {
    return (
        <header className="flex fixed items-center w-full h-10vh text-babyBlue-600 bg-babyBlue-0 z-10">
            <h1 className="name text-center tracking-wide w-7/12 font-oleo-script text-4xl">
                Happy Samoyed
            </h1>
            <ul className="flex justify-center space-x-4 w-5/12">
                <li className="font-radio-canada">Strona główna</li>
                <li className="font-radio-canada">Psy</li>
                <li className="font-radio-canada">Galeria</li>
                <li className="font-radio-canada">Kontakt</li>
            </ul>
        </header>
    );
};

export default Header;
