import React from 'react';
import '../css/SignUp.css';


function SignUp(){

    return (
        <div class="content">
            <h2>Crear una cuenta</h2>
            <form id="signup-form">
                <label for="username">Usuario:</label>
                <input type="text" id="username" name="username" required/>
    
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required/>
    
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required/>
    
                <label for="city">Ciudad:</label>
                <input type="text" id="city" name="city" required/>
    
                <label for="cellphone">Teléfono Celular:</label>
                <input type="tel" id="cellphone" name="cellphone" required/>
    
                <label for="gender">Género:</label>
                <select id="gender" name="gender" required>
                    <option value="">Seleccione...</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                    <option value="other">Otro</option>
                    <option value="prefer_not">Prefiero no decirlo</option>
                </select>
    
                <div class="terms">
                    <input type="checkbox" id="terms" name="terms" required/>
                    <label for="terms">Acepto los <a href="#">Términos y Condiciones</a></label>
                </div>
    
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default SignUp;

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let city = document.getElementById("city").value;
    let cellphone = document.getElementById("cellphone").value;
    let gender = document.getElementById("gender").value;
    let termsAccepted = document.getElementById("terms").checked;

    if (username && email && password && city && cellphone && gender && termsAccepted) {
        alert("Registro exitoso");
        window.location.href = "index.html"; // Redirigir a la página principal
    } else {
        alert("Por favor, complete todos los campos y acepte los términos.");
    }
});

function navigate(section) {
    alert("Navegando a " + section);
}
