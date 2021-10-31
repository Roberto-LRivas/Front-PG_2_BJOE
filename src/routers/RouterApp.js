import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";

import { AuthContext } from "../Auth/AuthContext";
import { Login } from "../components/login/Login";
import { NavBarRouters } from "./NavBarRouters";
import { PrivateRouters } from "./PrivateRouters";
import { PublicRoute } from "./PublicRoute";

export const RouterApp = () => {

    const {user} = useContext (AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact path="/login" 
                        component = {Login} 
                        isAuth = { user.logged }
                        />
                    
                    <PrivateRouters 
                        path ="/" 
                        component = {NavBarRouters} 
                        isAuth = {user.logged}
                        />
                </Switch>
            </div>
        </Router>
    )
}