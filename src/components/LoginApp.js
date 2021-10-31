import React, { useEffect, useReducer, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { authReducer } from "../Auth/authReducer";
import { RouterApp } from "../routers/RouterApp";

const init = () => {
    return JSON.parse(localStorage.getItem('nombre_usuario')) || {logged:false}
}

export const LoginApp = () => {

    const [user, dispatch] = useReducer(authReducer, {} ,init);
    const [showBar, setShowBar] = useState(false);

    useEffect( () => {
        localStorage.setItem('nombre_usuario', JSON.stringify(user));
    },[user]);

    return (
        <AuthContext.Provider value = { {user, dispatch, showBar,setShowBar} }> 
            <RouterApp/>
        </AuthContext.Provider>
    )
}