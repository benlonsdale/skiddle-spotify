import { useState, useEffect } from 'react';
import axios from 'axios';

export const useArtists = (token, page = 1) => {
    const [ artists, setArtists ] = useState();

    useEffect(() => {
        console.log(token);
        if(token !== undefined){
            axios({
                url: 'https://api.spotify.com/v1/me/following?type=artist',
                headers: {
                    Authorization: token,
                },
                params: {
                    type: 'artist',
                    limit: 20,
                    offset: 20 * page,
                }
            })
            .then((res) => {
                setArtists(res.data.artists.items);
            })
            .catch(err => {
                // handle errors
                console.log(err);
            })
        }
    }, [token, page]);

    return artists;
}