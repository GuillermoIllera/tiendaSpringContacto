import {registrarUsuario} from "./registro.js";
import {iniciarSesion} from "./login.js"

document.addEventListener('DOMContentLoaded', function(){
	document.getElementById("login").addEventListener("submit", iniciarSesion(event), true);
});

async function prueba(){
    let come = document.getElementById("come").value;
    let url = "http://localhost:8080/TiendaSpringMVC/control";
    let data = {
        come: come
    };
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let json = await response.json();
    console.log(json.message);
}