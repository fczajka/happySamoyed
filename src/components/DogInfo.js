import Button from "./Button";

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
                <h2 className="font-oleo-script tracking-wide text-4xl ml-2">
                    {props.name}
                </h2>
                <p className="font-radio-canada max-w-sm mt-5 leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <Button text="Dowiedz się więcej!" />
            </div>
        </div>
    );
};

export default DogInfo;
