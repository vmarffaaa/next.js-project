import React from 'react';
import {getGenresById, getMovieInfo} from "@/services/api.service";
import {IMovie} from '@/models/IMovie'
import MoviesListComponent from "@/components/moviesList/MoviesListComponent"; // Import your IMovieDetail interface

interface Params {
    id: string;
}

const MovieInfoPage = async ({ params }: { params: Params }) => {
    const genreId = params.id;
    const movies: IMovie[] = await getGenresById(Number(genreId));

    return (
        <div>
            <MoviesListComponent movies={movies} />
        </div>
    );
};

export default MovieInfoPage;
