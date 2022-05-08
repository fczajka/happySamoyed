import Card from "./Card";

import foodPic from "../images/food.webp";
import funPic from "../images/samoyedFun.webp";
import learningPic from "../images/samoyedLearning.webp";
import walkingPic from "../images/samoyedWalking.webp";

const WhyUs = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col px-28 py-10">
            <h2 className="font-radio-canada text-6xl my-16">Dlaczego my:</h2>
            <div className="flex w-full justify-evenly pt-8">
                <Card text="Dużo ruchu" photo={walkingPic} />
                <Card text="Godziny zabawy" photo={funPic} />
                <Card text="Ważna nauka" photo={learningPic} />
                <Card text="Zdrowe jedzenie" photo={foodPic} />
            </div>
        </div>
    );
};

export default WhyUs;
