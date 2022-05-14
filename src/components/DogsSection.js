import DogInfo from "./DogInfo";
import samoyed1Photo from "../images/Pola.webp";
import samoyed2Photo from "../images/William.webp";

const DogsSection = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col py-10 text-babyBlue-1500 xsm:px-10 md:px-20 2xl:px-28">
            <h2 className="font-titan-one text-4xl my-16 xsm:text-5xl">
                Moje psy:
            </h2>
            <DogInfo photo={samoyed1Photo} name="Pola" />
            <DogInfo photo={samoyed2Photo} name="William" />
        </div>
    );
};

export default DogsSection;
