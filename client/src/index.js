import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore,applyMiddleware} from 'redux';//recommended to use redux-toolkit configureStore in production
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';


const store = createStore( reducers, {},applyMiddleware(reduxThunk));



//provider reads from store and notifies all child components of new state updates...ithink
/*
ReactDOM.render(
<Provider store={store}><App /></Provider>, 
document.querySelector('#root')
);
*/

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<Provider store={store}><App /></Provider>);

console.log('STRIPE KEY IS ',process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is',process.env.NODE_ENV);
console.log('hi, did it work?')