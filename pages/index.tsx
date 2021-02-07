// import Head from 'next/head'
import { Provider } from 'react-redux'
import React from 'react'
// import history from '../utils/history'
import store from '../store'
import config from '../auth_config.json'
import '../i18n'
import { Auth0Provider } from '../react-auth0-spa'
import App from '../App'
const onRedirectCallback = (appState: { targetUrl: any }) => {
    // history.push(
    //     appState && appState.targetUrl
    //         ? appState.targetUrl
    //         : window.location.pathname
    // )
}

export default function Home() {
    return (
        <Provider store={store}>
            <Auth0Provider
                {...config.login}
                onRedirectCallback={onRedirectCallback}
            >
                <App />
            </Auth0Provider>{' '}
        </Provider>
    )
}
