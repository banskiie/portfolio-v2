import { createContext, useState, useEffect } from "react";

export const MobileContext = createContext({
  isInMobile: false,
});

function MobileContextProvider(props) {
  const [isInMobile, setIsInMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const resizeW = () => setWindowSize(window.innerWidth);

    window.addEventListener("resize", resizeW);

    if (windowSize <= 768) {
      setIsInMobile(true);
    } else {
      setIsInMobile(false);
    }

    return () => window.removeEventListener("resize", resizeW);
  }, [windowSize]);

  return (
    <MobileContext.Provider value={{ isInMobile: isInMobile }}>
      {props.children}
    </MobileContext.Provider>
  );
}

export default MobileContextProvider;
