import React from 'react'
import parseSpotifyHash from '../utils/parseSpotifyHash';

export default ({onAuthenticated}) => {
    const { hash } = window.location;
    if(hash.length > 0){
        const response = parseSpotifyHash(window.location.hash)
        onAuthenticated(response)
    }
    // console.log();

    const redirect = `https://accounts.spotify.com/authorize?client_id=752da1455c594bd08d367cad0c34c6ff&response_type=token&redirect_uri=http://localhost:3000&scope=user-follow-read`

    return (
        <div>
            <button onClick={() => window.location = redirect}>Log in with spotify</button>
        </div>
    )
}
