import React from 'react';
import '../css/LoginContainer.css';


function LoginContainer(){

    return (
    <div className="login-container">
        <h2>Inicio de sesion</h2>
        <input type="text" id="username" placeholder="Username"></input>
        <input type="password" id="password" placeholder="Password"></input>
        <button onPress={login}>Iniciar</button>
        <div className="create-account">
            <a href="#">¿No tienes cuenta? Crea una  haciendo click aqui.</a>
        </div>
    </div>
    );
}

export default LoginContainer; 

const login = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password");
    }
};