import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'
import rootReducer from './root-redux'

//El persistStore lo q hace al final es almacenar en la localStorage lo q es ortientado
//al store mientras q si c desea almacenar algo individual en la localStorage debe ser a lo clasico

//En caso de que no c quiera modificar la matriz c utiliza de esta manera
//createStore(rootReducer, applyMiddleware(logger))

const middlewares: any[] = []

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

const persistor = persistStore(store)

export default {store, persistor}