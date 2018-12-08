import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useArtists } from "../hooks";

const Artists = ({ auth, history }) => {
    const [page, setPage] = useState(1);
    const artists = useArtists(auth.token, page);

    return (
        <Fragment>
            <h1>Your favourite artists</h1>
            {artists !== undefined && artists.length > 0 && (
                <ArtistList>
                    {artists.map(artist => {
                        return (
                            <ArtistPanel key={`spotify-id-${artist.id}`}>
                                <img src={artist.images[2].url} />
                                <div className="details">
                                    <h4>{artist.name}</h4>
                                    <button
                                        onClick={() =>
                                            history.push(
                                                `/artists/${artist.name}/events`
                                            )
                                        }
                                    >
                                        Find Gigs
                                    </button>
                                </div>
                            </ArtistPanel>
                        );
                    })}
                </ArtistList>
            )}
        </Fragment>
    );
};

const ArtistList = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ArtistPanel = styled.li`
    flex: 0 0 250px;
    display: flex;
    padding: 5px;
    background: rgba(0, 0, 0, 0.4);
    margin: 5px;
    img {
        width: 80px;
        height: 80px;
    }
    .details {
        padding: 0px 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex: 1 1 100px;
        h4 {
            margin: 0;
        }
        button {
            background: #e066ff;
            border: none;
            color: #fff;
            align-self: flex-end;
            font-size: 0.9rem;
        }
    }
`;

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps)(Artists);
