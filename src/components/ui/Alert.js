import React from "react";

export const Alert = ({mensaje = '', action = ''}) => {

    return (
        <div className="alert alert-danger animate__animated animate__shakeY" role="alert" id = "Alert">
            {mensaje}
        </div>
    )

}