import React from 'react';
import MoviesListCardComponent from "@/components/moviesListCard/MoviesListCardComponent";
import style from "@/components/moviesListCard/CardComponentStyle.module.css";
import {IMovie} from "@/models/IMovie";

interface SearchResultsProps {
    results: IMovie[];
}

const SearchResultsComponent: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div className={style.movie_list}>
            {results.map((result) => (
                <MoviesListCardComponent key={result.id} movie={result} />
            ))}
        </div>
    );
};

export default SearchResultsComponent;