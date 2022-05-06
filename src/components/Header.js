const Header = () => {
    return (
        <header className="flex items-center w-full h-10vh">
            <h1 className="name text-center w-7/12 font-oleoScript text-4xl">
                Happy Samoyed
            </h1>
            <ul className="flex justify-center space-x-4 w-5/12">
                <li className="font-radioCanada">Stronga główna</li>
                <li className="font-radioCanada">Psy</li>
                <li className="font-radioCanada">Galeria</li>
                <li className="font-radioCanada">Kontakt</li>
            </ul>
        </header>
    );
};

export default Header;
