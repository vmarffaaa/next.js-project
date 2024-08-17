'use client';

import React, {FC} from 'react';
import StarRating from "@/components/starsRating/StarsRatingComponent";
import style from './CardComponentStyle.module.css'
import PosterPreviewComponent from "@/components/posterPreview/PosterPreviewComponent";


interface IProps {
    movie: any
}

const MovieslistCardComponent: FC<IProps> = ({movie}) => {

    const roundedVoteAverage = Math.round(movie.vote_average * 10) / 10;
    const starsRate = movie.vote_average/2

    return (
        <div className={style.card}>
            <div className={style.posterContainer}>
                <PosterPreviewComponent movieId={movie.id} path={movie.poster_path} title={movie.title}/>
            </div>
                <h3 className={style.title}>{movie.title}</h3>
                <p>{movie.adult}</p>
                <div className={style.ratting}>
                    <StarRating rating={starsRate} totalStars={5}/>
                    <span className={style.rate}>{roundedVoteAverage}</span>
                </div>

        </div>
    );
};

export default MovieslistCardComponent;