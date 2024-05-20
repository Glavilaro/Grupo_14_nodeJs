import { validarFormulario } from "./validacion.js";

let formulario = document.getElementById("formContacto");

formulario.onsubmit = validarFormulario; 

