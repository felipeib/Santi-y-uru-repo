let formRegistro = document.querySelector("#form-registro"); 
let email = document.querySelector("#email"); 
let password = document.querySelector("#password"); 
let repetirPassword = document.querySelector("#repetir-password"); 
let errorMsg = document.querySelector("#error-registro"); 

/* Escuchar el evento submit al intentar enviar el formulario */ 
formRegistro.addEventListener("submit", function(event) { 

    event.preventDefault(); 

    if (email.value == "") { 
        errorMsg.innerText = "El email es obligatorio."; 
    } 
    else if (password.value == "") { 
        errorMsg.innerText = "La contraseña es obligatoria."; 
    } 
    else if (password.value.length < 6) { 
        errorMsg.innerText = "La contraseña debe tener al menos 6 caracteres"; 
    } 
    else if (password.value != repetirPassword.value) { 
        errorMsg.innerText = "Las contraseñas no coinciden"; 
    } 
    else { 
        this.submit(); 
    } 
});