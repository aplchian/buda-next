// import React from 'react'
import ReactDOM from 'react-dom'
// import '../../buda/src/index.css'
import App from '../../buda/src/App'
// import * as serviceWorker from '../../buda/src/serviceWorker'
// import '../../buda/src/i18n'
import { Auth0Provider } from '../../buda/src/react-auth0-spa'
import config from '../../buda/src/auth_config.json'
import history from '../utils/history'
import store from '../../buda/src/store'
import { Provider } from 'react-redux'

// const whyDidYouRender = require('@welldone-software/why-did-you-render')
// whyDidYouRender(React, {
//     trackAllPureComponents: true,
// })

// A function that routes the user to the right place
// after login
// const onRedirectCallback = (appState: { targetUrl: any }) => {
//     history.push(
//         appState && appState.targetUrl
//             ? appState.targetUrl
//             : window.location.pathname
//     )
// }
//
// ReactDOM.render(
//     <Provider store={store}>
//         <Auth0Provider
//             {...config.login}
//             onRedirectCallback={onRedirectCallback}
//         >
//             <App />
//         </Auth0Provider>{' '}
//     </Provider>,
//     document.getElementById('root')
// )

// serviceWorker.unregister()
