import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { useArtists } from "../hooks";

const Artists = ({auth}) => {
    const [ page, setPage ] = useState(1);
    const artists = useArtists(auth.token, page);

    return (
        <Fragment>
            <h1>Your favourite artists</h1>
            {
                artists !== undefined && artists.length > 0 &&
                <ul>
                    {artists.map(artist => {
                        return <li key={`spotify-id-${artist.id}`}>{artist.name}</li>
                    })}
                </ul>
            }
        </Fragment>
        
    )
    
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(Artists)