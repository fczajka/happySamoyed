import { Link } from "react-router-dom";
import Button from "./Button";
import William from "../images/William.webp";

const DogWilliam = () => {
    return (
        <div className="bg-babyBlue-0 p-48">
            <div className="flex">
                <div className="w-1/2">
                    <img src={William} alt="" />
                </div>
                <div className="w-1/2 ml-16">
                    <h2 className="font-oleo-script tracking-wide text-4xl ml-2">
                        William
                    </h2>
                    <p className="font-radio-canada max-w-md mt-5 leading-relaxed text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <Link to="/">
                        <Button
                            text="Strona główna"
                            textSize="text-sm"
                            textColor="text-babyBlue-50"
                            bgColor="bg-babyBlue-400"
                            borderColor="border-babyBlue-600"
                            padding="px-3 py-2"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DogWilliam;
