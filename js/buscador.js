/* Capturamos el formulario y los elementos que necesitamos */
let formBusqueda = document.querySelector("#form-busqueda");
let inputBusqueda = document.querySelector("#busqueda");
let errorBusqueda = document.querySelector("#error-busqueda");

formBusqueda.addEventListener("submit", function (event) {
    event.preventDefault();     

    errorBusqueda.innerText = "";

    if (inputBusqueda.value == "") {
        errorBusqueda.innerText = "Escribí algo para buscar.";

    } else if (inputBusqueda.value.length < 3) {
        errorBusqueda.innerText = "La búsqueda debe tener al menos 3 caracteres.";

    } else {
        this.submit();          
    }
});