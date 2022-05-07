const DogInfo = (props) => {
    return (
        <div className={`flex my-8 max-w-70% ${props.flex_direction}`}>
            <div className="w-1/2">
                <img
                    className="w-full h-full object-cover"
                    src={props.photo}
                    alt=""
                />
            </div>
            <div className="w-1/2 m-5 relative">
                <h2 className="font-oleo-script text-4xl ml-2">{props.name}</h2>
                <p className="font-radio-canada max-w-sm mt-5 leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <button className="relative my-5 font-radio-canada font-bold tracking-wider p-5 rounded-md bg-royalPink-400 text-royalPink-50 border-b-4 border-royalPink-500 transition-all">
                    Dowiedz się więcej!
                </button>
            </div>
        </div>
    );
};

export default DogInfo;
