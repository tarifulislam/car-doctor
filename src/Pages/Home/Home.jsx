import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className=" container mx-auto">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;