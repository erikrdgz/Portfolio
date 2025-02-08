import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext";
import transition from "../transitions";

const NotFound = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/"); 
    };

    const { isDarkMode } = useDarkMode();

    return (
        <div
            className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} flex items-center justify-center  h-[90vh]`}
            style={{ fontFamily: "Arial, sans-serif" }}
        >
            <div className="relative text-center">
                {/* Massive 404 */}
                <p className="text-xl py-4">Error</p>
                <h1 className="text-9xl sm:text-[12rem] md:text-[16rem] font-black">
                    404
                </h1>

                {/* Rotated Button with Text Animation */}
                <button
                    onClick={goHome}
                    className=" 
                               py-3 px-8 text-md font-semibold text-white bg-orange-500 shadow-lg 
                               hover:bg-orange-600 transition-all duration-300 h-32 w-32 md:h-48 md:w-48 
                               rotate-[-90deg] group"
                >
                    <span className="inline-block transition-transform duration-300 group-hover:rotate-90">
                        Go Back Home
                    </span>
                </button>
            </div>
        </div>
    );
};

export default transition(NotFound);
