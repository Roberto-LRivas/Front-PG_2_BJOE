import React from "react";

export const AlertSuccess = ({mensaje = '', action = ''}) => {

    return (
        <div className="alert alert-success animate__animated animate__shakeY" role="alert" id = "Alert">
            {mensaje}
        </div>
    )

}