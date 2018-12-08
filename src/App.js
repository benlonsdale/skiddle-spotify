import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store, { constants } from "./store";

import SpotifyAuth from "./containers/Spotify/components/SpotifyAuth";
import Artists from './containers/Artists/components/Artists';

const ProtectedApp = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Artists} />
                    <Route exact path="/events/:artist" render={() => <h1>test</h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

const AuthProtect = () => {
    const [token, setToken] = useState(
        window.localStorage.getItem("spotifyToken")
    );

    useEffect(() => {        
        window.localStorage.setItem("spotifyToken", token);
        store.dispatch({
            type: constants.SET_TOKEN,
            payload: token
        })
    }, [token])

    return (
        <Provider store={store}>
            {token === null ? (
                <SpotifyAuth
                    onAuthenticated={response => {                      
                        setToken("Bearer " + response.access_token);           
                    }}
                />
            ) : (
                <ProtectedApp />
            )}
        </Provider>
    );
};

export default AuthProtect;
