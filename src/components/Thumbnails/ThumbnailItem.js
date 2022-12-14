import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBookmarkData } from "../../store/bookmark/bookmark-action";
import { removeBookmarkData } from "../../store/bookmark/bookmark-action";

import Bookmark from "../Bookmark/Bookmark";
import Rating from "../../UI/Rating";

import classesReg from "./ThumbnailItem.module.css";
import classesTrend from "./TrendingItem.module.css";

import movieIconLight from "../../icons/icon-category-movie.svg";
import tvIconLight from "../../icons/icon-category-tv.svg";
import movieIconDark from "../../icons/icon-category-movie-dark.svg";
import tvIconDark from "../../icons/icon-category-tv-dark.svg";

function ThumbnailItem(props) {
  const dispatch = useDispatch();

  const bookmarkHandler = () => {
    if (!props.isBookmarked) dispatch(addBookmarkData(props));

    if (props.isBookmarked) dispatch(removeBookmarkData(props.id));
  };

  // Styling

  const isRegular = props.type === "regular" ? true : false;
  const classes = isRegular ? classesReg : classesTrend;
  const movieIcon = isRegular ? movieIconDark : movieIconLight;
  const tvIcon = isRegular ? tvIconDark : tvIconLight;
  const IMG_URL = `https://image.tmdb.org/t/p/${isRegular ? "w200" : "w300"}`;

  // JSX

  const mediaType =
    props.media === "movie" ? (
      <p className={classes.media}>
        <img src={movieIcon} alt="movie" />
        Movie
      </p>
    ) : (
      <p className={classes.media}>
        <img src={tvIcon} alt="tv" />
        TV Series
      </p>
    );

  return (
    <div className={classes.card}>
      <Link className={classes.poster} to={`/${props.media}/${props.id}`}>
        <img src={`${IMG_URL}${props.posterUrl}`} alt="poster" />

        {isRegular && (
          <Rating
            rating={props.rate}
            style={{ bottom: "-2rem", left: "0.5rem" }}
          />
        )}
      </Link>

      <Bookmark
        onBookmark={bookmarkHandler}
        isBookmarked={props.isBookmarked}
      />

      <h3 className={classes.title}>
        <Link to={`/${props.media}/${props.id}`}>{props.title}</Link>
      </h3>

      {mediaType}
    </div>
  );
}

export default ThumbnailItem;
