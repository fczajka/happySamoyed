import Button from "./Button";
import { Link } from "react-router-dom";

const DogInfo = (props) => {
    return (
        <div
            className={`flex my-8 max-w-70% text-babyBlue-1500 ${props.flex_direction}`}
        >
            <div className="w-1/2">
                <img
                    className="w-full h-full object-cover"
                    src={props.photo}
                    alt=""
                />
            </div>
            <div className="w-1/2 m-5 relative">
                <h3 className="font-titan-one tracking-wide text-4xl ml-2">
                    {props.name}
                </h3>
                <p className="font-radio-canada max-w-sm mt-5 leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <Link to={`/details/${props.name}`}>
                    <Button
                        text="Poczytaj o mnie!"
                        textSize="text-sm"
                        textColor={
                            props.name == "Pola"
                                ? "text-royalPink-50"
                                : "text-babyBlue-50"
                        }
                        bgColor={
                            props.name == "Pola"
                                ? "bg-royalPink-400"
                                : "bg-babyBlue-400"
                        }
                        borderColor={
                            props.name == "Pola"
                                ? "border-royalPink-600"
                                : "border-babyBlue-600"
                        }
                        padding="px-3 py-2"
                    />
                </Link>
            </div>
        </div>
    );
};

export default DogInfo;
