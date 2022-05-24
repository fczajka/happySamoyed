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
                <div className="max-w-1920 flex flex-col items-center mt-10vh">
                    <div className="flex my-16 max-w-70% text-babyBlue-1500 flex-col lg:flex-row lg:odd:flex-row-reverse">
                        <div className="lg:w-5/12 2xl:w-1/2">
                            <img
                                className="w-full h-full object-cover"
                                src={walking}
                                alt=""
                            />
                        </div>
                        <div className="lg:w-7/12 my-5 relative lg:m-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-4xl ml-2">
                                Odpowiedni wysiłek
                            </h3>
                            <p className="font-radio-canada max-w-lg mt-5 leading-relaxed text-justify">
                                Każdy nasz pies ma dostęp do dużego podwórka
                                (4000m2) gdzie bawią się ze sobą lub innymi za
                                znajomymi psami. Codziennie zapewniamy im długi
                                spacer i odpowiednią dawkę zabaw i szkoleń.
                            </p>
                        </div>
                    </div>
                    <div className="flex my-8 max-w-70% text-babyBlue-1500 flex-col lg:flex-row lg:odd:flex-row-reverse">
                        <div className="lg:w-5/12 2xl:w-1/2">
                            <img
                                className="w-full h-full object-cover"
                                src={samoyedLearning}
                                alt=""
                            />
                        </div>
                        <div className="lg:w-7/12 my-5 relative lg:m-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-4xl ml-2">
                                Nauka
                            </h3>
                            <p className="font-radio-canada max-w-lg mt-5 leading-relaxed text-justify">
                                Nasze samojedy są nauczone wszystkich zasad
                                poprawnego zachowania w domu, szczególnie w
                                kwestii niszczycielstwa oraz czystości. Dbamy o
                                ich socjalizację i poprawne zachowanie względem
                                innych zwierząt.
                            </p>
                        </div>
                    </div>
                    <div className="flex my-8 max-w-70% text-babyBlue-1500 flex-col lg:flex-row lg:odd:flex-row-reverse">
                        <div className="lg:w-5/12 2xl:w-1/2">
                            <img
                                className="w-full h-full object-cover"
                                src={fun}
                                alt=""
                            />
                        </div>
                        <div className="lg:w-7/12 my-5 relative lg:m-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-4xl ml-2">
                                Dużo zabawy
                            </h3>
                            <p className="font-radio-canada max-w-lg mt-5 leading-relaxed text-justify">
                                Organizujemy naszym pieskom wiele
                                socjalizujących zabaw, jak i również
                                samodzielnie je szkolimy i bawimy.
                            </p>
                        </div>
                    </div>
                    <div className="flex my-8 max-w-70% text-babyBlue-1500 flex-col lg:flex-row lg:odd:flex-row-reverse">
                        <div className="lg:w-5/12 2xl:w-1/2">
                            <img
                                className="w-full h-full object-cover"
                                src={food}
                                alt=""
                            />
                        </div>
                        <div className="lg:w-7/12 my-5 relative lg:m-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-4xl ml-2">
                                Dobre jedzenie
                            </h3>
                            <p className="font-radio-canada max-w-lg mt-5 leading-relaxed text-justify">
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
                    <Link to="/" className="mb-10vh lg:my-12">
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
