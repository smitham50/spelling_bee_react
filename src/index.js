import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import gameReducer from './reducers/gameReducer';
import dictionaryReducer from './reducers/dictionaryReducer';
import letterReducer from './reducers/letterReducer';

const rootReducer = combineReducers({
                      game: gameReducer, 
                      dictionary: dictionaryReducer,
                      letter: letterReducer
                    });

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
