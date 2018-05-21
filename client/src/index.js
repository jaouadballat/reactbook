import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import Thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'



import reducers from './reducers';

import Routes from './routes';
import './index.css';


const history = createHistory();
const middleware = routerMiddleware(history);


const store = createStore(reducers, applyMiddleware(logger, Thunk, middleware));
 
ReactDOM.render(
    <Provider store={store}>
            <ConnectedRouter history={history}>
            <Router>
                <Routes />
            </Router>
            </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
