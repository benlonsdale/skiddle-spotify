import { useState, useEffect } from 'react';
import axios from 'axios';

export const useArtists = (token, page = 1) => {
    const [ artists, setArtists ] = useState();

    useEffect(() => {        
        if(token !== undefined){
            axios({
                url: 'https://api.spotify.com/v1/me/following',
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

export const useEvents = (artist) => {
    const [ events, setEvents ] = useState();

    useEffect(() => {
        (async () => {
            const events = await fetchArtistEvents(artist);
            setEvents(events);
        })()
    }, [artist]);

    return events;
}


const fetchArtistEvents = async (artist) => {
    const artistRes = await axios({
        url: 'https://www.skiddle.com/api/v1/artists/',            
        params: {
            api_key: process.env.REACT_APP_SKIDDLE_KEY,     
            name: artist           
        }
    })

    if(artistRes === undefined){
        return undefined;
    }else if(artistRes.data.results.length === 0){
        return [];
    }

    const artistID = artistRes.data.results[0].id;

    const eventsRes = await axios({
        url: 'https://www.skiddle.com/api/v1/events/',            
        params: {
            api_key: process.env.REACT_APP_SKIDDLE_KEY,     
            a: artistID           
        }
    })

    if(eventsRes === undefined){
        return []
    }

    return eventsRes.data.results;
}