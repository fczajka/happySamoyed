import { Link } from "react-router-dom";

const DogInfo = (props) => {
    return (
        <div className="flex my-8 max-w-70% text-babyBlue-1500 flex-col lg:flex-row lg:odd:flex-row-reverse">
            <div className="lg:w-5/12 2xl:w-1/2">
                <img
                    className="w-full h-full object-cover"
                    src={props.photo}
                    alt=""
                />
            </div>
            <div className="lg:w-7/12 my-5 relative lg:m-5 2xl:w-1/2">
                <h3 className="font-titan-one tracking-wide text-4xl ml-2">
                    {props.name}
                </h3>
                <p className="font-radio-canada max-w-lg mt-5 leading-relaxed text-justify">
                    {props.text}
                </p>
                <div
                    className={`w-min my-5 rounded-md whitespace-nowrap ${
                        props.name == "Pola"
                            ? "text-royalPink-50 bg-royalPink-400 border-royalPink-600"
                            : "text-babyBlue-50 bg-babyBlue-400 border-babyBlue-600"
                    } border-b-4 hover:border-b-0 hover:translate-y-1 hover:mb-6`}
                >
                    <Link
                        to={`/details/${props.name}`}
                        className="w-full block h-full px-3 py-2 text-sm font-radio-canada font-bold tracking-wider "
                    >
                        Poczytaj o mnie!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DogInfo;
