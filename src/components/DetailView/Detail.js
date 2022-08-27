import React from "react";
import { Link } from "react-router-dom";

import Rating from "../../UI/Rating";

import classes from "./Detail.module.css";
import iconBookmark from "../../icons/icon-bookmark-full.svg";

const IMG_URL = `https://image.tmdb.org/t/p/w400`;

function Detail(props) {
  const detail = props.detail;

  return (
    <div className={classes["detail-container"]}>
      <img
        src={`${IMG_URL}${detail.poster}`}
        className={classes.poster}
        alt="poster"
      />

      <div className={classes.header}>
        <p className={classes.title}>{detail.title}</p>
        <p className={classes.tagline}>{detail.tagline}</p>

        <Link to={`/${detail.media}`} className={classes.media}>
          {detail.media === "tv" ? "TV Series" : "Movie"}
        </Link>

        <Rating rating={detail.rating} style={{ position: "static" }} />

        <div className={classes.genres}>
          <button>
            <img src={iconBookmark} alt="bookmark" /> Add to bookmark
          </button>

          <div>{detail.genres.join(", ")}</div>
        </div>
      </div>

      <div className={classes.content}>
        <p className={classes.info}>
          <span>CREATED BY</span>
          {detail.media === "tv"
            ? detail.createdBy.join(", ")
            : detail.createdBy}
        </p>

        <p className={classes.info}>
          <span>COUNTRY</span>
          {detail.country}
        </p>

        <p className={classes.info}>
          <span>RELEASES</span>
          {detail.released}
        </p>

        <div className={classes.overview}>{detail.overview}</div>
      </div>
    </div>
  );
}

export default Detail;