import Button from "./Button";
import { Link } from "react-router-dom";

const WhyUsDetails = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-babyBlue-0">
            <Link to="/">
                <Button
                    text="Strona główna"
                    textSize="text-sm"
                    textColor="text-royalPink-50"
                    bgColor="bg-royalPink-400"
                    borderColor="border-royalPink-600"
                    padding="px-3 py-2"
                ></Button>
            </Link>
        </div>
    );
};

export default WhyUsDetails;
