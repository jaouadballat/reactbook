import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../components/Home';
import Book from '../components/Book';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Auth from '../components/Auth';
import Profile from '../components/Profile';
import AddBook from '../components/AddBook';
import UserBooks from '../components/UserBooks';
import EditBook from '../components/EditBook';
import Register from '../components/Register';
import Logout from '../components/Logout';
import Guess from '../components/Guess';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/profile' component={Auth(Profile)} />
                <Route path='/book/:id' component={Auth(Book)} />
                <Route path='/addbook' component={Auth(AddBook)} />
                <Route path='/userbooks' component={Auth(UserBooks)} />
                <Route path='/edit-book/:id' component={Auth(EditBook)} />
                <Route path='/login' component={Guess(Login)} />
                <Route path='/logout' component={Logout} />
                <Route path='/register' component={Guess(Register)} />
                <Route path='/' component={Auth(Home)} />
            </Switch>
        </Layout>
    );
}

export default Routes;