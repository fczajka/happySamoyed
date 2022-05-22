const Landing = () => {
    return (
        <div className="w-full relative h-screen text-center bg-landing-photo bg-l-50-0 bg-cover bg-no-repeat flex items-center justify-start lg:bg-center">
            <div className="w-full font-radio-canada text-babyBlue-0 text-center lg:ml-16 lg:w-auto">
                <h2 className="text-4xl">Weź jednego ze sobą</h2>
                <h3 className="text-xl">I nie każ sobie dłużej czekać </h3>
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
    );
};

export default Landing;
