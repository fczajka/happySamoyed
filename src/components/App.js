import Header from "./Header";
import Landing from "./Landing";
import DogsSection from "./DogsSection";
import Contact from "./Contact";
import WhyUs from "./WhyUs";

const App = () => {
    return (
        <div className="bg-babyBlue-0">
            <Header />
            <Landing />
            <WhyUs />
            <DogsSection />
            <Contact />
        </div>
    );
};

export default App;
