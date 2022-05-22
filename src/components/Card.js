import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="w-256 bg-babyBlue-100 rounded-md shadow-md shadow-babyBlue-300 text-babyBlue-1500 transition-all mt-20 hover:scale-105 xl:mt-12">
            <img
                className="w-full h-160px object-cover rounded-t-md"
                src={props.photo}
                alt=""
            />
            <h3 className="font-titan-one p-4 text-lg tracking-wide">
                {props.text}
            </h3>
            <p className="px-4 text-sm leading-relaxed text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-min my-5 mx-4 rounded-md whitespace-nowrap text-royalPink-50 bg-royalPink-400 border-royalPink-600 border-b-4 hover:border-b-0 hover:translate-y-1 hover:mb-6">
                <Link
                    to="/details/why-us"
                    className="w-full block h-full px-3 py-2 text-sm font-radio-canada font-bold tracking-wider "
                >
                    Dowiedz się więcej!
                </Link>
            </div>
        </div>
    );
};

export default Card;
