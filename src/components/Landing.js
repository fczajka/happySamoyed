import Button from "./Button";

const Landing = () => {
    return (
        <div className="w-full relative h-screen bg-landing-photo bg-center bg-cover bg-no-repeat flex items-center justify-stert">
            <div className="font-radio-canada text-babyBlue-0 text-center ml-16">
                <h2 className="text-4xl">Weź jednego ze sobą</h2>
                <h3 className="text-xl">I nie każ sobie dłużej czekać </h3>
                <Button
                    text="Sprawdź!"
                    textSize="text-sm"
                    bgColor="bg-babyBlue-400"
                    borderColor="border-babyBlue-600"
                    padding="px-3 py-2"
                />
            </div>
        </div>
    );
};

export default Landing;
