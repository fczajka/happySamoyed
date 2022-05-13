import Landing from "./Landing";
import DogsSection from "./DogsSection";
import Contact from "./Contact";
import WhyUs from "./WhyUs";
import MobileNavbar from "./MobileNavbar";

const App = () => {
    return (
        <div className="bg-babyBlue-0 max-w-1920 my-0 mx-auto">
            <Landing />
            <WhyUs />
            <DogsSection />
            <Contact />
            <MobileNavbar />
        </div>
    );
};

export default App;
