import CitizenApplication from "../../../Component/CitizenApplication/CitizenApplication";
import MarQuee from "../../../Component/Marquee/MarQuee";
import Serach from "../../../Component/Search/Search/Serach";

const Home = () => {
    return (
        <div>
            <MarQuee/>
            <Serach/>
            <CitizenApplication/>        
        </div>
    );
};

export default Home;