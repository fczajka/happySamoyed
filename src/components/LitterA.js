import Button from "./Button";
import { Link } from "react-router-dom";
import pola from "../images/Pola.webp";
import Balu from "../images/Balu.webp";
import Animation from "./Animation";
import Betsy from "../images/Betsy.webp";
import Boni from "../images/Boni.webp";
import Baki from "../images/Baki.webp";
import Basco from "../images/Basco.webp";

const LitterA = () => {
    return (
        <Animation>
            <div className="w-full mt-10vh flex justify-center">
                <div className="max-w-1920 text-babyBlue-1500 flex flex-col items-center">
                    <div className="flex flex-col w-full mb-16 sm:max-w-60% lg:odd:flex-row-reverse">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pl-6">
                            <img
                                className="w-160 h-96 object-cover"
                                src={Betsy}
                                alt="Betsy"
                            />
                        </div>
                        <div className="p-6 relative lg:w-7/12 lg:p-0 lg:pr-6 lg:my-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-2xl mb-4 ml-2 lg:m-0 lg:text-4xl">
                                Betsy
                            </h3>
                            <p className="font-radio-canada text-sm max-w-xl mt-5 leading-relaxed text-justify sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
                                Śliczna dobrze zbudowana dziewczynka o
                                niezależnym spokojnym charakterze. Przyjaźnie
                                nastawiona do innych ludzi jak i zwierząt. Jest
                                suczką bardzo ciekawą świata, chętnie sprawdza
                                nowe tereny. Posiada śnieżnobiałe gęste futerko.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-16 sm:max-w-60% lg:flex-row">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pr-6">
                            <img
                                className="w-160 h-96 object-cover object-top-25%"
                                src={Boni}
                                alt="Boni"
                            />
                        </div>
                        <div className="p-6 relative lg:w-7/12 lg:p-0 lg:pl-6 lg:my-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-2xl mb-4 ml-2 lg:m-0 lg:text-4xl">
                                Boni
                            </h3>
                            <p className="font-radio-canada text-sm max-w-xl mt-5 leading-relaxed text-justify sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
                                Urodziwa suczka o pięknych proporcjach. Posiada
                                bardzo gęste puchate futerko. Spokojna i
                                stonowana ale bardzo przyjacielska. Wykazuje
                                niezwykłą chęć kontaktu z człowiekiem. Gotowa do
                                ciągłej zabawy i eksploracji terenu.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-16 sm:max-w-60% lg:odd:flex-row-reverse">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pl-6">
                            <img
                                className="w-160 h-96 object-cover"
                                src={Baki}
                                alt="Baki"
                            />
                        </div>
                        <div className="p-6 relative lg:w-7/12 lg:p-0 lg:pr-6 lg:my-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-2xl mb-4 ml-2 lg:m-0 lg:text-4xl">
                                Baki
                            </h3>
                            <p className="font-radio-canada text-sm max-w-xl mt-5 leading-relaxed text-justify sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
                                Pięknie zbudowany samiec o bujnym białym futrze.
                                Naturalny lider stada, wykazuje dużo
                                samodzielności, bardzo chętny do bliskiego
                                kontaktu z człowiekiem. Przyjacielski i pogodny.
                                Urodzony Alfa.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-16 sm:max-w-60% lg:flex-row">
                        <div className="lg:w-5/12 2xl:w-1/2 2xl:pr-6">
                            <img
                                className="w-160 h-96 object-cover"
                                src={Basco}
                                alt="Basco"
                            />
                        </div>
                        <div className="p-6 relative lg:w-7/12 lg:p-0 lg:pl-6 lg:my-5 2xl:w-1/2">
                            <h3 className="font-titan-one tracking-wide text-2xl mb-4 ml-2 lg:m-0 lg:text-4xl">
                                Basco
                            </h3>
                            <p className="font-radio-canada text-sm max-w-xl mt-5 leading-relaxed text-justify sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
                                Przystojny chłopiec, bardzo dobrze zbudowany o
                                pięknym puchatym futerku. Wykazuje zdecydowane
                                cechy samca, chętny do zabawy oraz kontaktu z
                                ludźmi. Zawsze gotów na przechadzkę. Urodzony
                                kompan do przygody.
                            </p>
                        </div>
                    </div>

                    <div className="w-full font-radio-canada to-babyBlue-1500 p-6 text-justify text-sm leading-relaxed lg:p-0 sm:text-base sm:leading-relaxed sm:max-w-60% md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
                        <h3 className="font-titan-one tracking-wide text-2xl ml-2 text-center mb-8 lg:text-4xl">
                            Rodzice
                        </h3>
                        <p>
                            Idealny dobór partnerów. Przepiękna suczka o
                            idealnych proporcjach, śliczna głowa otoczona bujną
                            grzywą oraz wspaniały puchaty ogon. Z natury bardzo
                            spokojna i podatna na trening. Balu, mocno zbudowany
                            samiec o perfekcyjnej głowie otoczonej lwią grzywą.
                            Jego futro jest niezwykle gęste i długie. Syn wysoce
                            utytuwanego Falcona. Oba pieski nigdy nie
                            przejawiały tendencji niszczycielskich.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center py-6 mb-12 sm:max-w-60% lg:flex-row">
                        <div className="mb-8 basis-1/2 sm:mb-0">
                            <h4 className="font-titan-one tracking-wide text-xl mt-6 text-center mb-8 lg:text-3xl lg:ml-2 lg:mt-2">
                                Pola
                            </h4>
                            <img
                                className="w-full h-104 my-2 object-cover lg:pr-3"
                                src={pola}
                                alt="Pola"
                            />
                        </div>
                        <div className="mb-8 basis-1/2 sm:mb-0">
                            <h4 className="font-titan-one tracking-wide text-xl mt-6 text-center mb-8 lg:text-3xl lg:ml-2 lg:mt-2">
                                Balu
                            </h4>
                            <img
                                className="w-full h-104 my-2 object-cover lg:pl-3"
                                src={Balu}
                                alt="Balu"
                            />
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
