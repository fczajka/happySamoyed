import Landing from "./Landing";
import DogsSection from "./DogsSection";
import WhyUs from "./WhyUs";
import Animation from "./Animation";

const App = () => {
    return (
        <Animation>
            <div className="bg-babyBlue-0 max-w-1920 my-0 mx-auto">
                <Landing />
                <WhyUs />
                <DogsSection />
            </div>
        </Animation>
    );
};

export default App;
