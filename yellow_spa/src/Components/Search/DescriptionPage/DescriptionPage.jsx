import React, { useEffect, useLayoutEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getGameDetails,
  getGameScreenshots,
  resetDetailsToDefault,
} from "../../../Redux/gameDetailsReducer";
import "./Loader.css";
import "./Slider.css";
import {
  GameTitleDiv,
  Container,
  GameInfo,
  SliderMain,
  AboutInfo,
  LinksInfo,
} from "./descriptionStyled";
import GameInfoContent from "./GameInfo/GameInfoContent";
import GameAboutContent from "./GameAbout/GameAboutContent";
import GameLinksContent from "./GameLinks/GameLinksContent";
import MyGallery from "./Slider/MyGallery";
import { Loader } from "./../../Helpers/loaderStyled";
import { Error } from "./../../Helpers/Error";
import { copyText } from "./../../Helpers/copyText";
import CustomAlert from "./../../Helpers/CustomAlert";
import Authors from "../../Authors/Authors";

function DescriptionPage(props) {
  const dispatch = useDispatch();
  let { id } = useParams();
  const title = useSelector((state) => state.details.title);
  const description = useSelector((state) => state.details.description);
  const rating = useSelector((state) => state.details.rating);
  const website = useSelector((state) => state.details.website);
  const screenshots = useSelector((state) => state.details.screenshots);
  const metacritic = useSelector((state) => state.details.metacritic);
  const reddit_url = useSelector((state) => state.details.reddit_url);
  const released = useSelector((state) => state.details.released);
  const developers_name = useSelector((state) => state.details.developers_name);
  const genres_name = useSelector((state) => state.details.genres_name);
  const esrb_rating_name = useSelector(
    (state) => state.details.esrb_rating_name
  );
  const isMobile = useSelector((state) => state.media.isMobile);
  const isTablet = useSelector((state) => state.media.isTablet);
  const isDesktop = useSelector((state) => state.media.isDesktop);
  const statusText = useSelector((state) => state.details.status);
  const parentPlatforms = useSelector((state) => state.details.parentPlatforms);
  const playtime = useSelector((state) => state.details.playtime);
  const fetchDescData = async () => {
    await dispatch(getGameDetails({ id }));
    await dispatch(getGameScreenshots({ id }));
  };
  useEffect(() => {
    fetchDescData();
  }, []);

  useLayoutEffect(() => {
    return () => {
      //unmount when leaving the page
      dispatch(resetDetailsToDefault());
    };
  }, []);
  const copyHandler = () => {
    copyText(title);
  };
  const aboutFullWidth = !website && !reddit_url;
  return (
    <>
      {statusText === "loading" && <Loader isGray={false} />}
      {statusText === "failed" && <Error fetchDescData={fetchDescData} />}
      {statusText === "success" && (
        <>
          <GameTitleDiv>
            <CustomAlert title={title} copyHandler={copyHandler} />
          </GameTitleDiv>
          <Container aboutFullWidth = {aboutFullWidth}>
            <GameInfo>
              <GameInfoContent
                released={released}
                developers_name={developers_name}
                genres_name={genres_name}
                esrb_rating_name={esrb_rating_name}
                rating={rating}
                metacritic={metacritic}
                parentPlatforms={parentPlatforms}
                playtime={playtime}
              />
            </GameInfo>
            <SliderMain>
              <MyGallery
                screenshots={screenshots}
                isDesktop={isDesktop}
                isTablet={isTablet}
              />
            </SliderMain>
            <AboutInfo>
              <GameAboutContent description={description} />
            </AboutInfo>
              <LinksInfo>
                <GameLinksContent website={website} reddit_url={reddit_url} />
              </LinksInfo>
          </Container>
          <Authors />
        </>
      )}
    </>
  );
}

export default DescriptionPage;
