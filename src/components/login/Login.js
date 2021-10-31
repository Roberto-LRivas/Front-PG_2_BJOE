import React, { useContext, useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import './login.css';
import { types } from "../../types/types";
import { AuthContext } from "../../Auth/AuthContext";
import { Alert } from "../ui/Alert";
import { AlertSuccess } from "../ui/AlertSuccess";

let parte = 0;
let mensaje = '';
//1 = Login
//2 = Codigo

export const Login = ({history}) => {

    const [showCode, setCode] = useState(false);
    const [showAlert, setAlert] = useState(false);
    const [showAlertSuccess, setAlertSuccess] = useState(false);



    const {dispatch} = useContext(AuthContext);

    const [valuesForm, handleInputChange] = useForm({
        user: '',
        password: ''
    });

    const {user, password} = valuesForm;

    const [valueCode, HandleChangeCode] = useForm({
        code: ''
    });

    const {code} = valueCode;

    useEffect ( () => {

    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleLogin = async () => {
        
        if( user.length !== 0 && password.length !== 0 ){

            const data = await fetch('http://127.0.0.1:8080/login', {
                method: 'POST',
                body: JSON.stringify({
                    nombre_usuario: user,
                    password:       password
                }),
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
            .then(resp => resp.json());

            if(data.nombre_usuario) {
                
                parte = 1;
                mensaje = `Se ha enviado un codigo de verificacion al correo ${data.email}`;
                setAlert(false);
                setCode(true);
                setAlertSuccess(true);
                
            }

            else{
                parte = 1;
                mensaje = 'Nombre de usuario o contraseña incorrectas';
                setAlert(false);
                setAlert(true);
                setAlertSuccess(false);
                
                setCode(false);
            }
        }

        else {
            //console.log('Campos vacios');
            parte = 1;
            mensaje = 'Nombre de usuario o contraseña incorrectas';
            setCode(false);
            setAlert(true);
            setAlertSuccess(false);

        }
        
    }

    const handleCode = async () => {

        const data = await fetch('http://127.0.0.1:8080/login/2AF', {
                method: 'POST',
                body: JSON.stringify({
                    nombre_usuario: user,
                }),
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                    code: code
                }
            })
            .then(resp => resp.json());
        
        if(data.estado){
            
            const action = {
                type: types.login,
                payload: {
                    user:  data.nombre_usuario
                }
            }
            parte = 0;
            localStorage.setItem('x-token', data.token);
            setAlertSuccess(false);
            setCode(false);
            setAlert(false);
            dispatch(action);
            history.replace('/main');
            
        }

        else {
            parte = 2;
            mensaje = 'Codigo de verificacion incorrecto';
            setAlertSuccess(false);
            setAlert(false);
            setAlert(true);
        }

    }

    return (
            <div className="wrapper fadeInDown mt-5">
                <h1>Bienvenido</h1>
                <div id="formContent">

                    <form className = "mt-2" onSubmit = {handleSubmit} >
                        {

                            (showAlert && parte === 1)
                            ? <Alert mensaje = {mensaje} />
                            : <></>
                        }
                        {
                            (showAlert && parte === 2)
                            ? <Alert mensaje = {mensaje} />
                            : <></>

                        }
                        {
                            (showAlertSuccess)
                            ? <AlertSuccess mensaje = {mensaje} />
                            : <></> 
                        }
                        <input 
                            type="text" 
                            id="login" 
                            className="fadeIn second" 
                            name="user" 
                            placeholder="Nombre de usuario"
                            autoComplete = "off"
                            onChange = {handleInputChange}
                            value= {user}
                            required = {true}
                            />
                            
                        <input 
                            type="password" 
                            id="password" 
                            className="fadeIn third" 
                            name="password" 
                            placeholder="Contraseña"
                            autoComplete = "off"
                            onChange = {handleInputChange}
                            required = {true}

                        />

                        {
                            (showCode) 
                            ? <><input 
                                type="password" 
                                id="password" 
                                className="fadeIn third" 
                                name="code" 
                                placeholder="Codigo de seguridad"
                                autoComplete = "off"
                                onChange = {HandleChangeCode}
                                required = {true}

                                />

                                <input 
                                type="submit" 
                                className="fadeIn fourth" 
                                value="Verificar codigo"
                                onClick = {handleCode}
                                />
                             </>
                            :
                            <input 
                            type="submit" 
                            className="fadeIn fourth" 
                            value="Iniciar sesion"
                            onClick = {handleLogin}
                            />

                        }
                        
                    </form>

                </div>
            </div>
    )
}