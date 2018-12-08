import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store, { constants } from "./store";

import SpotifyAuth from "./containers/Spotify/components/SpotifyAuth";
import Artists from "./containers/Artists/components/Artists";
import Events from "./containers/Artists/components/Events";
import {AppWrapper, Header} from "./components/Layout";

const ProtectedApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Artists} />
                <Route
                    exact
                    path="/artists/:artist/events"
                    component={Events}
                />
            </Switch>
        </BrowserRouter>
    );
};

const AuthProtect = () => {
    const [token, setToken] = useState(
        window.localStorage.getItem("spotifyToken") ? window.localStorage.getItem("spotifyToken") : null
    );

    useEffect(
        () => {
            window.localStorage.setItem("spotifyToken", token ? token : '');
            store.dispatch({
                type: constants.SET_TOKEN,
                payload: token
            });
        },
        [token]
    );

    return (
        <AppWrapper>
            <Header />
            <Provider store={store}>
                {token === null || token === undefined ? (
                    <SpotifyAuth
                        onAuthenticated={response => {
                            setToken("Bearer " + response.access_token);
                        }}
                    />
                ) : (
                    <ProtectedApp />
                )}
            </Provider>
        </AppWrapper>
    );
};

export default AuthProtect;
