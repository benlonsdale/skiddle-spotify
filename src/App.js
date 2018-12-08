import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SpotifyAuth from './containers/Spotify/components/SpotifyAuth';

const ProtectedApp = () => {
    return (
        <div className="App">
            <h1>The App</h1>
            <BrowserRouter>
                <Switch>
                    <Route match="/" render={() => <h1>Route</h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

const AuthProtect = () => {
    const [ token, setToken ] = useState(window.localStorage.getItem('spotifyToken'))

    if(token === null){
        return <SpotifyAuth onAuthenticated={(response) => {
            setToken('Bearer ' + response.accessToken);
            // window.location = '/';
        }} />
    }

    return (
        <ProtectedApp />
    );
};

export default AuthProtect;
