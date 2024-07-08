import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { AllReducers } from './Reducers'



import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
const config = {
  key: 'main-root',
  storage
}

const persistRed = persistReducer(config, AllReducers)

const store = createStore(
  persistRed,
  applyMiddleware(),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const persistor = persistStore(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* PersistGate delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux. */}
      {/* NOTE: the loading prop can be null or any react instance to show during loading (e.g. a splash screen), for example loading={<Loading />}. */}
      <App />
    </PersistGate>
  </Provider>
);