import DogInfo from "./DogInfo";
import samoyed1Photo from "../images/samoyedInfo1.webp";
import samoyed2Photo from "../images/samoyedInfo2.webp";

const DogsSection = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col px-28 py-10">
            <h1 className="font-radio-canada text-6xl my-16">Moje psy:</h1>
            <DogInfo
                photo={samoyed1Photo}
                name="Pola"
                flex_direction="flex-row"
            />
            <DogInfo
                photo={samoyed2Photo}
                name="William"
                flex_direction="flex-row-reverse"
            />
        </div>
    );
};

export default DogsSection;
