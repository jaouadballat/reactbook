import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../components/Home';
import Book from '../components/Book';
import Layout from '../components/Layout';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                    <Route path='/book/:id' component={Book} />
                    <Route path='/' component={Home} />
            </Switch>
        </Layout>
    );
}


export default Routes;