import { Link } from "react-router-dom";
import Button from "./Button";
import William from "../images/Pola.webp";

const DogWilliam = () => {
    return (
        <div className="bg-babyBlue-0 mt-10vh lg:flex lg:justify-center xl:px-28 2xl:px-52">
            <div className="flex flex-col  max-w-1920 sm:items-center md:flex-row md:items-start md:p-4 lg:w-11/12">
                <div className="sm:w-3/5 sm:mt-4 md:w-2/5 lg:w-1/2">
                    <img src={William} alt="" />
                </div>
                <div className="p-6 sm:w-3/5 sm:mt-4 md:p-0 md:ml-6 lg:w-1/2 2xl:ml-16">
                    <h2 className="font-titan-one tracking-wide text-4xl mb-4 ml-2">
                        William
                    </h2>
                    <p className="font-radio-canada max-w-xl text-sm leading-relaxed text-justify xsm:text-base lg:max-w-lg 2xl:max-w-2xl">
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
                            textColor="text-royalPink-50"
                            bgColor="bg-royalPink-400"
                            borderColor="border-royalPink-600"
                            padding="px-3 py-2"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DogWilliam;
