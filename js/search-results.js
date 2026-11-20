let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString); 
let termino = queryStringObj.get('busqueda'); 

let titulo = document.querySelector("#titulo-resultados"); 
let listaResultados = document.querySelector("#lista-resultados"); 


/* Petición asincrónica a la API pasando el término en la Query String */ 
fetch('https://dummyjson.com/products/search?q=' + termino) 
.then(function(response) { 
    return response.json(); 
}) 
.then(function(data) { 
    let productos = data.products; 
    let contenidoHtml = ""; 

    /* Evaluación de la cantidad de resultados devueltos por la API */ 
    if (productos && productos.length > 0) { 
        titulo.innerText = "Resultados de búsqueda para: " + termino; 
            
        /* Recorrido de los productos devueltos*/ 
        for (let i = 0; i < productos.length; i++) { 
            let producto = productos[i]; 
                
            contenidoHtml += 
            '<article class="pipo">' +
            '<img class="auto" src="'+ producto.thumbnail + '" alt="' + producto.title + '">' + 
            '<h3>' + producto.title + '</h3>'+
            '<p>'+ producto.description + '</p>'+
            '<p>Precio: $' + producto.price + ' USD</p>'+
            '<a class= "ver-mas" href="./producto.html?id=' + producto.id + '">Ver detalle </a>'+
            '</article>';
        }
        listaResultados.innerHTML = contenidoHtml;
    } else {
        titulo.innerText = "No hay resultado para el termino " + termino ;
    }
})
.catch(function(error) {
    console.log("El error es: " +  error);
});
