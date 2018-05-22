import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import Thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'



import reducers from './reducers';

import Routes from './routes';
import './index.css';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(reducers, applyMiddleware(middleware,logger, Thunk));
 
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
                <Routes />
        </ConnectedRouter>

    </Provider>
    , document.getElementById('root'));
