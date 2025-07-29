import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext";
import transition from "../transitions";
import FuzzyText from "./animation/FuzzyText";

const NotFound = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/"); 
    };

    const { isDarkMode } = useDarkMode();

    const hoverIntensity = 0.5;
const enableHover = true;

    return (
        <div
            className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} flex items-center justify-center  h-[90vh]`}
            style={{ fontFamily: "Arial, sans-serif" }}
        >
            <div className="relative text-center">
                <FuzzyText 
                    baseIntensity={0.2} 
                    hoverIntensity={hoverIntensity} 
                    enableHover={enableHover}
                    >
                    404
                    </FuzzyText>

                {/* Massive 404 */}
                <p className="text-xl py-4">Error</p>
              

                {/* Rotated Button with Text Animation */}
                <button
                    onClick={goHome}
                    className=" 
                               py-3 px-8 text-md font-semibold text-white bg-cyan-400 rounded shadow-lg 
                               "
                >
                    <span className="inline-block transition-transform duration-300  group-hover:rotate-90">
                        Go Back Home
                    </span>
                </button>
            </div>
        </div>
    );
};

export default transition(NotFound);
