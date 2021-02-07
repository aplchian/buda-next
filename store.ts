import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
// import events from "./reducers/events"
// import { getAllEvents } from "./services/events"
// import { setAllEvents, startFetchingEvents } from "./actions/events"
// import { reducer as formReducer } from 'redux-form'
import manifest from './redux/reducers'

// let composeWithDevTools
//
// if (typeof window !== 'undefined') {
//     // @ts-ignore
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// }

const store = createStore(
    combineReducers({
        manifest,
        // form: formReducer,
    }),
    // composeWithDevTools(applyMiddleware())
    applyMiddleware()
)

// function getEvents(dispatch, getState) {
//     dispatch(startFetchingEvents())
//     getAllEvents(
//         "band_Stop_Light_Observations"
//     ).then(({ data: { docs: allEvents } }) => {
//         dispatch(setAllEvents(allEvents))
//     })
// }

// store.dispatch(getEvents)

export default store
