import React from 'react';
import '../css/FileContainer';

function FileContainer(){
    
    return(
       
    <><div class="sidebar">
            <button onclick="navigate('archivos')">Archivos</button>
            <button onclick="navigate('pruebas')">Pruebas</button>
            <button onclick="navigate('juegos')">Juegos</button>
            <button onclick="navigate('grupos')">Grupos</button>
        </div><div class="topbar">
                <button onclick="navigate('archivos')">Archivos</button>
                <button onclick="crear()">Crear</button>
                <button onclick="compartir()">Compartir</button>
                <button onclick="ordenar()">Ordenar</button>
            </div><div class="content" id="content">
                <h2>Archivador</h2>
                <p>Selecciona una opción de la barra lateral o superior.</p>
            </div></>

    )
}

export default FileContainer; 
function navigate(section) {
    document.getElementById("content").innerHTML = `<h2>${section.charAt(0).toUpperCase() + section.slice(1)}</h2><p>Contenido de ${section}.</p>`;
}

function crear() {
    alert("Función para crear nuevo contenido.");
}

function compartir() {
    alert("Función para compartir contenido.");
}

function ordenar() {
    alert("Función para ordenar archivos.");
}
