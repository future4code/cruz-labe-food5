import { BrowserRouter, Switch, Route } from 'react-router-dom'
import InitialPage from '../pages/InitialPage/InitialPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import HomePage from '../pages/HomePage/HomePage'
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage'
import CartPage from '../pages/CartPage/CartPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage'
import EditAdressPage from '../pages/EditAdressPage/EditAdressPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

import React from 'react'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <InitialPage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/signup">
                    <SignUpPage/>
                </Route>
                <Route exact path="/home">
                    <HomePage/>
                </Route>
                <Route exact path="/restaurant/:id">
                    <RestaurantPage/>
                </Route>
                <Route exact path="/cart">
                    <CartPage/>
                </Route>
                <Route exact path="/profile">
                    <ProfilePage/>
                </Route>
                <Route exact path="/edit-profile">
                    <EditProfilePage/>
                </Route>
                <Route exact path="/edit-adress">
                    <EditAdressPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router