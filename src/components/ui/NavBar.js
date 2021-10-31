import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import { types } from "../../types/types";

import './index.css'

export const NavBar = () => {

    const {user:{user}, dispatch} = useContext(AuthContext);
    
    const history = useHistory();
    
    const handleLogout = () => {
        
        const action = {
            type: types.logout,
        }

        dispatch(action);
        localStorage.removeItem('nombre_usuario');
        localStorage.removeItem('x-token');
        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" 
                      to="/main">
                          Bienvenido {
                            (user)
                            ?user.toUpperCase()
                            : <></>
                            }
                </Link>

                <div className="navbar-nav" id="navbarNavAltMarkup">
                    <div className="d-flex">
                        <Link   className="nav-link text-danger" 
                                to="/login"
                                onClick = {handleLogout}
                                >Cerrar sesion
                    </Link>
                    </div>

                </div>
            </div>
        </nav>
    )
}