let boton = document.getElementById ("boton")

boton.onmousedown

let inputNombre = document.getElementById ("nombreInput")
let inputEdad = document.getElementById ("edadInput")
let inputEmail = document.getElementById ("emailInput")
let inputPais = document.getElementById ("paisInput")
let inputCiudad = document.getElementById ("ciudadInput")
let inputPeso = document.getElementById ("pesoInput")
let inputAltura = document.getElementById ("alturaInput")
let inputPesod = document.getElementById ("pesodInput")

inputNombre.onchange =()=>{
    alert ("Debe completar el campo anterior o siguiente")
}
inputEdad.onchange = ()=>{
    alert ("Debe completar el campo anterior o siguiente")
}
inputEmail.onchange =()=>{
    alert ("Debe completar el campo anterior o siguiente")
}
inputPais.onchange =()=>{
    alert ("Debe completar el campo anterior o siguiente")
}
inputCiudad.onchange = () =>{
    alert ("Debe completar el campo anterior o siguiente")
}
inputPeso.onchange = ()=>{
    alert ("Debe completar el campo anterior o siguiente")
}
inputAltura.onchange=()=>{
    alert ("Debe completar el campo anterior o siguiente")
}
inputPesod.onchange=()=>{
    alert ("Debe completar el campo anterior o siguiente")
}






let Enviarformulario = document.getElementById ("formulario")

Enviarformulario.addEventListener ("submit",ValidarFormulario)

function ValidarFormulario (event) {
       event.preventDefault();
       console.log (event);
       alert("Formulario enviado , muchas gracias");
}

ValidarFormulario();


