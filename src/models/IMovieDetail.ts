import {IGenre} from './IGenre'
import {IProductionCompany} from './IProductionCompany'

export interface IMovieDetail {
    adult: boolean;
    genres: IGenre[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    production_companies: IProductionCompany[];
    status: string;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
    poster_path:string
}