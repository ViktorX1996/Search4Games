import React, { useEffect, useLayoutEffect } from "react";
import Carousel, { CarouselItem } from "./Carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getGameDetails,
  getGameScreenshots,
  resetDetailsToDefault,
} from "./../Redux/gameDetailsReducer";
import parse from "html-react-parser";
import "../index.css";

function DescriptionPage(props) {
  const dispatch = useDispatch();
  let { id } = useParams();
  const navigate = useNavigate();
  const title = useSelector((state) => state.details.title);
  const description = useSelector((state) => state.details.description);
  const rating = useSelector((state) => state.details.rating);
  const website = useSelector((state) => state.details.website);
  const screenshots = useSelector((state) => state.details.screenshots);

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

  const fetchDescData = async () => {
    await dispatch(getGameDetails({ id }));
    console.log("DONE 1");
    await dispatch(getGameScreenshots({ id }));
    console.log("DONE  2 fetch desc data");
  };
  useEffect(() => {
    fetchDescData();
  }, []);

  useLayoutEffect(() => {
    return () => {
      //unmount when leaving the page
      dispatch(resetDetailsToDefault());
      console.log("reset to default");
    };
  }, []);

  return (
    <div className="description__main__div">
      <section className="description__page__global__container">
        <div className="description__page__container">
          <div className="description__page__container__title">
            <h1>{title}</h1>
          </div>
          {isDesktop && (
            <div className="desktop__info">
              <p>
                Released: <span>{released}</span>
              </p>
              <p>
                Developer: <span>{developers_name}</span>
              </p>
              {genres_name && (
                <p>
                  Genre: <span>{genres_name}</span>
                </p>
              )}
              {esrb_rating_name && (
                <p>
                  Age rating: <span>{esrb_rating_name}</span>
                </p>
              )}
            </div>
          )}
          <div>
            {rating > 4 && <>Rating: <span className="desc__ratingGreat">{rating}</span></>}
            {rating <= 4 && rating >= 3 && <>Rating: <span className="desc__ratingMedium">{rating}</span></>}
            {rating <= 2.9 && <>Rating: <span className="desc__ratingBad">{rating}</span></>}
          </div>
        </div>

        <Carousel>
          {screenshots.map((screenshots, index) => (
            <CarouselItem index={index}>
              <img
                className="carousel__img"
                src={screenshots}
                alt="some screens should be here ;)"
              />
            </CarouselItem>
          ))}
        </Carousel>
      </section>

      <section className="about__section">
        <h2>About</h2>
        <span>{parse(description)}</span>
      </section>

      <section className="website__section">
        {website && (
          <>
            <h2>Website:</h2>
            <h4>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="desc__link"
                href={website}
              >
                {website}
              </a>
            </h4>
          </>
        )}
        {reddit_url && (
          <>
            <h2>Reddit: </h2>
            <h4>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="desc__link"
                href={reddit_url}
              >
                {reddit_url}
              </a>
            </h4>
          </>
        )}
      </section>
    </div>
  );
}

export default DescriptionPage;
