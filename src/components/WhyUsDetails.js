import Button from "./Button";
import { Link } from "react-router-dom";
import walking from "../images/samoyedWalking.webp";
import fun from "../images/samoyedFun.webp";
import samoyedLearning from "../images/samoyedLearning.webp";
import food from "../images/food.webp";
import Animation from "./Animation";

const WhyUsDetails = () => {
    return (
        <Animation>
            <div className="w-full flex justify-center">
                <div className="max-w-1920 flex flex-col items-center">
                    <div className="flex my-16 max-w-70% text-babyBlue-1500 flex-col lg:max-w-85% lg:flex-row lg:odd:flex-row-reverse 2xl:max-w-90%">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pl-5">
                            <img
                                className="w-160 h-96 object-cover"
                                src={walking}
                                alt=""
                            />
                        </div>
                        <div className="lg:w-7/12 my-5 relative lg:m-5 lg:ml-0 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-4xl">
                                Odpowiedni wysiłek
                            </h3>
                            <p className="font-radio-canada max-w-xl mt-5 leading-relaxed text-justify">
                                Każdy nasz pies ma dostęp do dużego podwórka
                                (4000m2) gdzie bawią się ze sobą lub innymi za
                                znajomymi psami. Codziennie zapewniamy im długi
                                spacer i odpowiednią dawkę zabaw i szkoleń.
                            </p>
                        </div>
                    </div>
                    <div className="flex my-16 max-w-70% text-babyBlue-1500 flex-col lg:max-w-85% lg:flex-row lg:odd:flex-row-reverse 2xl:max-w-90%">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pr-5">
                            <img
                                className="w-160 h-96 object-cover"
                                src={samoyedLearning}
                                alt=""
                            />
                        </div>
                        <div className="lg:w-7/12 my-5 relative lg:m-5 lg:mr-0 lg:pl-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-4xl">
                                Nauka
                            </h3>
                            <p className="font-radio-canada max-w-xl mt-5 leading-relaxed text-justify">
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
                    <div className="flex my-16 max-w-70% text-babyBlue-1500 flex-col lg:max-w-85% lg:flex-row lg:odd:flex-row-reverse 2xl:max-w-90%">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pl-5">
                            <img
                                className="w-160 h-96 object-cover"
                                src={fun}
                                alt=""
                            />
                        </div>
                        <div className="lg:w-7/12 my-5 relative lg:m-5 lg:ml-0 lg:pr-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-4xl">
                                Dużo zabawy
                            </h3>
                            <p className="font-radio-canada max-w-xl mt-5 leading-relaxed text-justify">
                                Organizujemy naszym pieskom wiele
                                socjalizujących zabaw, jak i również
                                samodzielnie je szkolimy i bawimy.
                            </p>
                        </div>
                    </div>
                    <div className="flex my-16 max-w-70% text-babyBlue-1500 flex-col lg:max-w-85% lg:flex-row lg:odd:flex-row-reverse 2xl:max-w-90%">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pr-5">
                            <img
                                className="w-160 h-96 object-cover"
                                src={food}
                                alt=""
                            />
                        </div>
                        <div className="lg:w-7/12 my-5 relative lg:m-5 lg:mr-0 lg:pl-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-4xl">
                                Dobre jedzenie
                            </h3>
                            <p className="font-radio-canada max-w-xl mt-5 leading-relaxed text-justify">
                                W naszej hodowli psy są karmione, karmą suchą
                                marki Royal Canin oraz często dodatkowymi
                                posiłkami typu BARF. Do przez cały okres
                                dojrzewania otrzymywały odpowiednie witaminy i
                                suplementy na zdrowe stawy. Nadal są
                                suplementowane algami morskimi, które
                                zapewniając niezbędne aminokwasy, kwasy
                                tłuszczowe omega-3, witamin i jodu. Jak i
                                również poprawiają wybarwienie sierści i
                                zmniejszają tworzenie się kamienia nazębnego.
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

export default WhyUsDetails;
