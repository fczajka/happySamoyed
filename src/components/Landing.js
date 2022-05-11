import Button from "./Button";

const Landing = () => {
    return (
        <div className="w-full relative h-screen text-center bg-landing-photo bg-l-50-0 bg-cover bg-no-repeat flex items-center justify-start lg:bg-center">
            <div className="w-full font-radio-canada text-babyBlue-0 text-center lg:ml-16 lg:w-auto">
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
