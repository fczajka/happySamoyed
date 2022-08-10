import DogInfo from "./DogInfo";
import samoyed1Photo from "../images/Pola.webp";
import samoyed2Photo from "../images/William.webp";

const DogsSection = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col py-10 bg-our-dogs bg-cover bg-no-repeat text-babyBlue-1500 xsm:px-10 md:px-20 2xl:px-28">
            <h2 className="font-titan-one text-4xl mb-16 xsm:text-5xl">
                Nasze psy:
            </h2>
            <DogInfo
                photo={samoyed1Photo}
                name="Pola"
                text="Suczka o bardzo pogodniej naturze, niezwykle cierpliwa i spokojna w kontakcie z ludźmi. Wysoce opiekuńcza w stosunku do swoich dzieci, naturalna przewodniczka. Nigdy nie przejawiała tendencji niszczycielskich, świetnie znosi podróże krótkie i długie."
            />
            <DogInfo
                photo={samoyed2Photo}
                name="William"
                text="Dumny samiec, od urodzenie posiada bardzo dostojny chód. Bardzo aktywny i przyjacielski, jest gotów do ciągłego ruchu. Przepiękna głowa o idealnych proporcjach otoczona bujną grzywą. Zgrabnej atletycznej postury. Naturalny model."
            />
        </div>
    );
};

export default DogsSection;
