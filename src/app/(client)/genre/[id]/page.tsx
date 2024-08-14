import MoviesListComponent from "@/components/moviesList/MoviesListComponent";
import { searchResults } from "@/services/api.service";
import SearchResultsComponent from "@/components/searchResults/SearchResultsComponent";

export default async function GenrePage({ params }: { params: { id: number } }) {
    const search = params.id;
    const results = await searchResults(id);

    return (
        <div>
            {results && results.length === 0 ? (
                <h1 className='text-center pt-6'>No results found</h1>
            ) : (
                <SearchResultsComponent results={results} />
            )}
        </div>
    );
}
