import "../styles/globals.css";
import store from "../store";
import {Auth0Provider} from "../react-auth0-spa";
import config from "../auth_config.json";
import {Provider} from "react-redux";
import React from "react";

const onRedirectCallback = (appState: { targetUrl: any }) => {
  // history.push(
  //     appState && appState.targetUrl
  //         ? appState.targetUrl
  //         : window.location.pathname
  // )
}

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    {/*
 // @ts-ignore*/}
    <Auth0Provider
        {...config.login}
        onRedirectCallback={onRedirectCallback}
    >
      <Component {...pageProps} />
    </Auth0Provider>{' '}
  </Provider>



}

export default MyApp
