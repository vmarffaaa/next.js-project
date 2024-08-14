import {options, baseUrl} from "@/constants/urls";
import {IMovieDetail} from "@/models/IMovieDetail";
import {IGenre} from "@/models/IGenre";


export const getAllMovies = async (): Promise<IMovie[]> => {
    let movies = await fetch(baseUrl + 'discover/movie?', options)
        .then(response => response.json())
    return movies.results
}


export const getImgForMovies =async (id: number) => {
    let image = await fetch( baseUrl + 'movie/'+ {id} + '/images', options)
    .then(response => response.json())
    return image
}

export const getMovieInfo = async (id: number): Promise<IMovieDetail> => {
        const url = `https://api.themoviedb.org/3/movie/${id}`;
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error fetching movie info: ${errorData.status_message}`);
        }
        return response.json();
};

export const searchResults = async(term:string): Promise<IMovie[]> => {

    let movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fc3abae61098b723ef5b0393cee14352&query=${term}&language=en-US&page=1&include_adult=false`, options)
    .then(response => response.json())
    return movies.results
};


export const getGenres = async (): Promise<IGenre[]> => {

        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US', options);

        if (!response.ok) {
            throw new Error(`Failed to fetch genres: ${response.statusText}`);
        }
        const data = await response.json();
        return data.genres;
};




