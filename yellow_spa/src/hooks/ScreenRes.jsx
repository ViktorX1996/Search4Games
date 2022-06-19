import { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";
import { setMedia } from "../Redux/mediaReducer";

export function ScreenRes(dispatch) {
  const isDesktop = useMediaQuery("(min-width: 1127px)");
  const isMobile = useMediaQuery("(max-width: 599px)");
  const isTablet = !isDesktop && !isMobile;

  useEffect(() => {
    dispatch(
      setMedia({
        isDesktop,
        isMobile,
        isTablet,
      })
    );
  }, [isDesktop, isMobile]);
}
