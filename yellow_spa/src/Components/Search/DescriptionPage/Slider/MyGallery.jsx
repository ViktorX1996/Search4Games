import React from "react";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "../Slider.css";
import "../Loader.css";
import { Loader, LoaderContainerStyled } from "./../../../Helpers/loaderStyled";
function MyGallery({ screenshots, isDesktop, isTablet }) {
  const [imgLoad, setImgLoad] = useState(false);
  const imageLoadHandler = () => {
    return setImgLoad(true);
  };
  //isGray second loader for images
  return (
    <>
      <div className={imgLoad ? "d-block" : "d-none"}>
        <ImageGallery
          items={screenshots}
          showBullets // no need to write ={true}
          showIndex={false}
          showPlayButton={false}
          showThumbnails={isDesktop || isTablet}
          thumbnailPosition={isDesktop ? "right" : "bottom"}
          onImageLoad={imageLoadHandler}
          useBrowserFullscreen={false}
        />
      </div>
      {!imgLoad && (
        <LoaderContainerStyled>
          <Loader isGray />
        </LoaderContainerStyled>
      )}
    </>
  );
}
export default MyGallery;
