import React from 'react';
import {getGenres} from "@/services/api.service";
import GenreBadgeComponent from "@/components/genreBadge/GenreBadgeComponent";
import {IGenre} from "@/models/IGenre";

const GenrePage = async () => {
    let genres:IGenre[] = await getGenres();

    return (
        <div>
            <GenreBadgeComponent genres={genres}/>
        </div>
    );
};

export default GenrePage;