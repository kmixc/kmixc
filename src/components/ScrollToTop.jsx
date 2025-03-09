import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when route changes
    }, [pathname]);

    return null; // No UI, just functionality
};

export default ScrollToTop;
