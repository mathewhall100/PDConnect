import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers/index';


const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = composeEnhancers(
    applyMiddleware(...middleware),
)(createStore)

const config = {
    key: 'root',
    storage,
}

const combinedReducer = persistReducer(config, reducer)

const createAppStore = () => {
    let store = configureStore(combinedReducer)
    let persistor = persistStore(store)

    return { store, persistor }
}

export default createAppStore