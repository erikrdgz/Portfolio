import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation(); // Hook to get the current location

    useEffect(() => {
        // Scroll to top whenever the route changes
        window.scrollTo(0, 0);
    }, [location]);

    return null;
};

export default ScrollToTop;
