let parrafoSaludo = document.querySelector("#saludo");
let linkLogin = document.querySelector("#item-login");
let linkRegistro = document.querySelector("#item-registro");
let linkLogout = document.querySelector("#item-logout");

/* Busco el email que se guardó el login */
let emailGuardado = localStorage.getItem("email");

if (emailGuardado != null) {
    parrafoSaludo.innerText = "Bienvenido: " + emailGuardado;
    linkLogin.style.display = "none";
    linkRegistro.style.display = "none";
    linkLogout.style.display = "block";
}