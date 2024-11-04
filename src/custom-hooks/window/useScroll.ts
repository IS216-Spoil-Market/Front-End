import { useState, useEffect } from "react";

const useScroll = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0);

    const handleScroll = () => {
        const newScrollYPosition = window.scrollY;
        setScrollYPosition(newScrollYPosition);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollYPosition
}

export default useScroll