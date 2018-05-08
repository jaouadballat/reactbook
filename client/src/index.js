import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {BrowserRouter as Router} from 'react-router-dom';

import reducers from './reducers';

import Routes from './routes';

const store = createStore(reducers, applyMiddleware(logger));
 

ReactDOM.render(
    <Provider store={store}>
            <Router>
                <Routes />
            </Router>
    </Provider>
    , document.getElementById('root'));
