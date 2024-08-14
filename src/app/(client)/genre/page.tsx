import React from 'react';
import { getGenres} from "@/services/api.service";
import Link from "next/link";
import MoviesListComponent from '@/components/moviesList/MoviesListComponent'
import GenreBadgeComponent from "@/components/genreBadge/GenreBadgeComponent";

const MoviePage = async () => {
    let genres = await getGenres();

    return (
        <div>
            <GenreBadgeComponent genres={genres}/>
        </div>
    );
};

export default MoviePage;