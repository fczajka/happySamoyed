import { Link } from "react-router-dom";
import William from "../images/William.webp";
import Animation from "./Animation";

const DogWilliam = () => {
    return (
        <Animation>
            <div className="bg-babyBlue-0 mt-10vh min-h-screen lg:flex lg:justify-center xl:px-28 2xl:px-52">
                <div className="flex text-babyBlue-1500 flex-col max-w-1920 sm:items-center md:flex-row md:items-start lg:w-11/12">
                    <div className="sm:w-3/5 md:w-2/5 lg:w-1/2">
                        <img src={William} alt="" />
                    </div>
                    <div className="p-6 sm:w-3/5 md:p-0 md:ml-6 lg:w-1/2 2xl:ml-16">
                        <h2 className="font-titan-one tracking-wide text-2xl mb-4 ml-2">
                            William
                        </h2>
                        <div className="text-base font-radio-canada max-w-xl lg:max-w-lg 2xl:max-w-2xl 2xl:text-lg">
                            <p className="mb-2">
                                Samiec pochodzenia Ukraińskiego.
                            </p>
                            <p className="text-sm leading-relaxed text-justify xsm:text-base xsm:leading-relaxed">
                                William przejawia naturalne cechy rasy, jest
                                bardzo energiczny i przyjazny. Każdego w domu
                                traktuje jako swoje stado czy to człowiek czy to
                                kot. Jest podatny na naukę, ale potrzebuje do
                                tego smacznej nagrody 😊.
                            </p>
                            <p className="text-sm mt-2 xsm:text-base">
                                William posiada pełne legalne uprawnienie
                                Reproduktora.
                            </p>
                            <ul className="text-sm xsm:text-base">
                                <li className="mt-2">Płeć : Samiec</li>
                                <li className="my-2">Data urodzenia :</li>
                                <li className="my-2">Ojciec :</li>
                                <li className="my-2">Matka :</li>
                                <li className="my-2">
                                    Badania : Stawy HD/A, Eyes - Clear
                                </li>
                                <li className="my-2">
                                    Właściciel : Ewa Wawrzeńczyk
                                </li>
                                <li className="my-2">Hodowca :</li>
                                <li className="my-2">Wzrost : 56cm</li>
                                <li className="mb-2">Waga : 22kg</li>
                            </ul>
                        </div>
                        <div className="w-min my-5 rounded-md whitespace-nowrap text-babyBlue-50 bg-babyBlue-400 border-babyBlue-600 border-b-4 hover:border-b-0 hover:translate-y-1 hover:mb-6">
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

export default DogWilliam;
