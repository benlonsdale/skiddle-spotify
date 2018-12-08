import React from "react";
import styled from 'styled-components';
import parseSpotifyHash from "../utils/parseSpotifyHash";
import { Card } from "../../../components/Layout";

export default ({ onAuthenticated }) => {
    const { hash } = window.location;
    if (hash.length > 0) {
        const response = parseSpotifyHash(window.location.hash);
        onAuthenticated(response);
    }
    // console.log();

    const redirect = `https://accounts.spotify.com/authorize?client_id=752da1455c594bd08d367cad0c34c6ff&response_type=token&redirect_uri=http://localhost:3000&scope=user-follow-read`;

    return (
        <Container>
            <div>
                <h1>Find gigs for your favourite artists</h1>
                <h3>Log in with Spotify to get your favourite artists</h3>
                <SpotifyButton onClick={() => (window.location = redirect)}>
                    Log in with spotify
                </SpotifyButton>

            </div>
        </Container>
    );
};

const Container = styled(Card)`
    margin-top: 50px;
    > div {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`

const SpotifyButton = styled.button`
    font-size: 1.2rem;
    background: #1DB954;
    color: #fff;
    border: 0;
    border-radius: 1.2rem;
    padding: 5px 20px;
    align-self: center;
`