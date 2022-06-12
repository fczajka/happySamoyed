import Card from "./Card";

import foodPic from "../images/food.webp";
import funPic from "../images/samoyedFun.webp";
import learningPic from "../images/samoyedLearning.webp";
import walkingPic from "../images/samoyedWalking.webp";

const WhyUs = () => {
    const walkingText =
        "Nasze psy mają dostęp do dużego podwórka do zabaw oraz zapewniamy im codzienne długie spacery.";
    const funText =
        "Organizujemy naszym pieskom wiele socjalizujących zabaw, jak i również samodzielnie je szkolimy i bawimy.";
    const learningText =
        "Każdy nasz pies jest nauczony zachowania czystości w domu jak i zachowania na spacerach";
    const foodText =
        "Nasze psy są karmione karmą Royal Cayien oraz często otrzymują posiłki typu BARF. Do tego oczywiście wszelką potrzebną suplementację.";

    return (
        <div
            id="whyUs"
            className="w-full flex justify-center items-center flex-col py-10 md:px-20 2xl:px-28"
        >
            <h2 className="font-titan-one text-4xl mt-12 mb-10 text-babyBlue-1500 xsm:text-5xl lg:mt-8">
                Dlaczego my:
            </h2>
            <div className="flex w-full items-center flex-col xl:flex-row xl:justify-between 2xl:justify-evenly">
                <div className="w-full flex flex-col items-center justify-around sm:flex-row md:w-full">
                    <Card
                        text="Dużo ruchu"
                        photo={walkingPic}
                        description={walkingText}
                    />
                    <Card
                        text="Godziny zabawy"
                        photo={funPic}
                        description={funText}
                    />
                </div>
                <div className="w-full flex flex-col items-center justify-around sm:flex-row md:w-full">
                    <Card
                        text="Ważna nauka"
                        photo={learningPic}
                        description={learningText}
                    />
                    <Card
                        text="Zdrowe jedzenie"
                        photo={foodPic}
                        description={foodText}
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
