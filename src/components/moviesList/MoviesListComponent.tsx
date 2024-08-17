import React, {FC} from 'react';
import MoviesListCardComponent from "@/components/moviesListCard/MoviesListCardComponent";
import style from '../moviesListCard/CardComponentStyle.module.css'
import {IMovie} from "@/models/IMovie";

interface IProps {
    movies: IMovie[]
}

const MoviesListComponent: FC<IProps> = ({movies}) => {
    return (
        <div className={style.movie_list}>
            {Array.isArray(movies) && movies.length > 0 ? (
                movies.map(movie => <MoviesListCardComponent movie={movie} key={movie.id} />)
            ) : (
                <p>No movies available</p>
            )}
        </div>
    );
};

export default MoviesListComponent;