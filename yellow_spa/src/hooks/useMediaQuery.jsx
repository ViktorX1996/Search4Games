import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    console.log('use media query 1');
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    
    window.addEventListener("resize", listener);
    console.log('use media query 2');
    return () => window.removeEventListener("resize", listener);
    
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;