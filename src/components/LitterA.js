import Button from "./Button";
import { Link } from "react-router-dom";
import pola from "../images/Pola.webp";
import fun from "../images/samoyedFun.webp";
import samoyedLearning from "../images/samoyedLearning.webp";
import william from "../images/William.webp";
import Animation from "./Animation";

const LitterA = () => {
    return (
        <Animation>
            <div className="w-full mt-10vh flex justify-center">
                <div className="max-w-1920 text-babyBlue-1500 flex flex-col items-center">
                    <div className="flex flex-col w-full mb-16 sm:max-w-70% lg:max-w-85% lg:flex-row lg:odd:flex-row-reverse 2xl:max-w-90%">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pl-6">
                            <img
                                className="w-160 h-96 object-cover"
                                src={pola}
                                alt=""
                            />
                        </div>
                        <div className="p-6 relative lg:w-7/12 lg:p-0 lg:pr-6 lg:my-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-2xl mb-4 ml-2 lg:m-0 lg:text-4xl">
                                Bettsy
                            </h3>
                            <p className="font-radio-canada text-sm max-w-xl mt-5 leading-relaxed text-justify xsm:text-base xsm:leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-16 sm:max-w-70% lg:max-w-85% lg:flex-row lg:odd:flex-row-reverse 2xl:max-w-90%">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pr-6">
                            <img
                                className="w-160 h-96 object-cover"
                                src={samoyedLearning}
                                alt=""
                            />
                        </div>
                        <div className="p-6 relative lg:w-7/12 lg:p-0 lg:pl-6 lg:my-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-2xl mb-4 ml-2 lg:m-0 lg:text-4xl">
                                Boni
                            </h3>
                            <p className="font-radio-canada text-sm max-w-xl mt-5 leading-relaxed text-justify xsm:text-base xsm:leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-16 sm:max-w-70% lg:max-w-85% lg:flex-row lg:odd:flex-row-reverse 2xl:max-w-90%">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pl-6">
                            <img
                                className="w-160 h-96 object-cover"
                                src={fun}
                                alt=""
                            />
                        </div>
                        <div className="p-6 relative lg:w-7/12 lg:p-0 lg:pr-6 lg:my-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-2xl mb-4 ml-2 lg:m-0 lg:text-4xl">
                                Baki
                            </h3>
                            <p className="font-radio-canada text-sm max-w-xl mt-5 leading-relaxed text-justify xsm:text-base xsm:leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-16 sm:max-w-70% lg:max-w-85% lg:flex-row lg:odd:flex-row-reverse 2xl:max-w-90%">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pr-6">
                            <img
                                className="w-160 h-96 object-cover"
                                src={william}
                                alt=""
                            />
                        </div>
                        <div className="p-6 relative lg:w-7/12 lg:p-0 lg:pl-6 lg:my-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-2xl mb-4 ml-2 lg:m-0 lg:text-4xl">
                                Basco
                            </h3>
                            <p className="font-radio-canada text-sm max-w-xl mt-5 leading-relaxed text-justify xsm:text-base xsm:leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>

                    <Link to="/" className="mb-10vh lg:mb-12">
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
        </Animation>
    );
};

export default LitterA;
