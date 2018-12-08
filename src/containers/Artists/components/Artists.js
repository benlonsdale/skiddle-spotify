import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useArtists } from "../hooks";

const Artists = ({auth, history}) => {
    console.log(history)
    const [ page, setPage ] = useState(1);
    const artists = useArtists(auth.token, page);

    return (
        <Fragment>
            <h1>Your favourite artists</h1>
            {
                artists !== undefined && artists.length > 0 &&
                <ul>
                    {artists.map(artist => {
                        return <li key={`spotify-id-${artist.id}`} onClick={() => history.push(`/events/${artist.name}`)}>{artist.name}</li>
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

export default connect(mapStateToProps)(withRouter(Artists))