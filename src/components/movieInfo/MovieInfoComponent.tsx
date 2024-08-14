import React, {FC} from 'react';
import {IMovieDetail} from "@/models/IMovieDetail";
import PosterPreviewComponent from "@/components/posterPreview/PosterPreviewComponent";
import style from './MovieInfoComponentStyle.module.css'


interface IProps {
    movieInfo: IMovieDetail;
}
const MovieInfoComponent: FC<IProps> = ({ movieInfo }) => {

    return (
        <div className={style.box}>
            <div className={style.container}>
                <div className={style.flex}>
                    <div className={style.image}>
                        <PosterPreviewComponent  movieId={movieInfo.id} path={movieInfo.poster_path} title={movieInfo.title}/></div>
                    <div className={style.infoFlex}>
                    <h1>{movieInfo.title}</h1>
                    <p><b>Tagline:</b> {movieInfo.tagline}</p>
                        <p><b>Genre:</b></p>
                    <div className={style.genre}>{movieInfo.genres.map(genre =>
                        (<p key={genre.id}>{genre.name}</p>))}
                    </div>
                    <p><b>Status:</b> {movieInfo.status}</p>
                    <p><b>Origin country:</b> {movieInfo.origin_country}</p>
                    </div>
                </div>

                <p className={style.overview}><b>Overview:</b> {movieInfo.overview}</p>
                <ul className={style.companies}><b>Production companies:</b> {movieInfo.production_companies.map((company, index) =>
                    (<li key={index}>{company.name} - {company.origin_country} </li>))}
                </ul>

            </div>
        </div>
    );
};

export default MovieInfoComponent;