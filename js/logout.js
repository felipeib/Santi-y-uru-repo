let itemLogout = document.querySelector("#item-logout"); 
let itemLogin = document.querySelector("#item-login"); 
let itemRegistro = document.querySelector("#item-registro"); 
let saludo = document.querySelector("#saludo");

/* 2\. Escuchar el evento click sobre el elemento de Logout */ 
if (itemLogout) { 
    itemLogout.addEventListener("click", function(event) { 
        event.preventDefault(); 

        localStorage.clear(); 
        
        if (saludo) { 
            saludo.innerText = ""; 
            saludo.style.display = "none"; 
        } 
        
        itemLogout.style.display = "none"; 
        
        /*Volver a mostrar Login y Registro en la barra de navegación */ 
        if (itemLogin) { 
            itemLogin.style.display = "block"; 
        } 
        if (itemRegistro) { 
            itemRegistro.style.display = "block"; 
        } 
    }); 
}