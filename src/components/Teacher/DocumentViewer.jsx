import React from 'react';
import '../css/DocumentViewer';

return ()=> //{
    <><div class="sidebar">
        <button onclick="navigate('archivos')">Archivos</button>
        <button onclick="navigate('pruebas')">Pruebas</button>
        <button onclick="navigate('juegos')">Juegos</button>
        <button onclick="navigate('grupos')">Grupos</button>
    </div><div class="topbar">
            <button onclick="navigate('documentos')">Documentos</button>
            <button onclick="crear()">Crear</button>
            <button onclick="compartir()">Compartir</button>
            <button onclick="ordenar()">Ordenar</button>
        </div><div class="rightbar">
            <button onclick="mostrarOpcion('tools')">Herramientas</button>
            <button onclick="mostrarOpcion('stream')">Transmitir</button>
            <button onclick="crear()">Crear</button>
            <button onclick="compartir()">Compartir</button>
            <button onclick="descargar()">Descargar</button>
        </div><div class="content" id="content">
            <h2>Visor de Documentos</h2>
            <iframe id="pdfViewer" src="https://www.orimi.com/pdf-test.pdf" frameborder="0"></iframe>
        </div></>; //<></>
//}

export default DocumentViewer;
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

function descargar() {
    alert("Descargando documento...");
}

function mostrarOpcion(opcion) {
    alert(`Has seleccionado la opción: ${opcion}`);
}
