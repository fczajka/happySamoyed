import { Link } from "react-router-dom";
import Pola from "../images/Pola.webp";
import Animation from "./Animation";

const DogPola = () => {
    return (
        <Animation>
            <div className="bg-babyBlue-0 mt-10vh min-h-screen lg:flex lg:justify-center xl:px-28 2xl:px-52">
                <div className="flex flex-col max-w-1920 sm:items-center md:flex-row md:items-start md:p-4 lg:w-11/12">
                    <div className="sm:w-3/5 sm:mt-4 md:w-2/5 lg:w-1/2">
                        <img src={Pola} alt="" />
                    </div>
                    <div className="p-6 sm:w-3/5 sm:mt-4 md:p-0 md:ml-6 lg:w-1/2 2xl:ml-16">
                        <h2 className="font-titan-one tracking-wide text-4xl mb-4 ml-2">
                            Pola
                        </h2>
                        <div className="text-base font-radio-canada max-w-xl lg:max-w-lg 2xl:max-w-2xl 2xl:text-lg">
                            <p className="mb-2">
                                Suczka pochodząca z rodowitych terenów rasy.
                            </p>
                            <p className="text-sm leading-relaxed text-justify xsm:text-base">
                                Suczka o bardzo pogodniej naturze, niezwykle
                                cierpliwa i spokojna w kontakcie z ludźmi.
                                Wysoce opiekuńcza w stosunku do swoich dzieci,
                                naturalna przewodniczka. Nigdy nie przejawiała
                                tendencji niszczycielskich, świetnie znosi
                                podróże krótkie i długie. Pola jest naszą
                                pierwszą suczką w hodowli i od początku była
                                bardzo podatna na wszelkie nauki zachowania i
                                czystości, oczywiście przy wykorzystaniu
                                przekonywujących nagród 😊.
                            </p>
                            <ul className="text-sm xsm:text-base">
                                <li className="mt-2">Płeć : Suczka</li>
                                <li className="my-2">Data urodzenia :</li>
                                <li className="my-2">Ojciec :</li>
                                <li className="my-2">Matka :</li>
                                <li className="my-2">Badania :</li>
                                <li className="my-2">Właściciel :</li>
                                <li className="my-2">Hodowca :</li>
                                <li className="my-2">Wzrost : 53cm</li>
                                <li className="mb-2">Waga : 20kg</li>
                            </ul>
                        </div>
                        <div className="w-min my-5 rounded-md whitespace-nowrap text-royalPink-50 bg-royalPink-400 border-royalPink-600 border-b-4 hover:border-b-0 hover:translate-y-1 hover:mb-6">
                            <Link
                                to="/"
                                className="w-full block h-full px-3 py-2 text-sm font-radio-canada font-bold tracking-wider "
                            >
                                Strona główna
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Animation>
    );
};

export default DogPola;
