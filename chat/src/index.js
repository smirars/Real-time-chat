import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { auth, firestore } from './firebaseConfig';

export const Context = createContext({ auth, firestore });

ReactDOM.render(
    <Context.Provider value={{ auth, firestore }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);


