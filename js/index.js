/* Captura de los contenedores en el DOM mediante selector por ID */
let seccion1 = document.querySelector("#seccion-1"); 
let seccion2 = document.querySelector("#seccion-2");


/* primera categoria - smartphones */
fetch('https://dummyjson.com/products/category/' + categoria1) 
.then(function(response) { 
    return response.json(); 
}) 
.then(function(data) { 
    let productos = data.products; 
    let contenidoHtml = ""; 

    for (let i = 0; i < productos.length; i++) { 
        let producto = productos[i];

        contenidoHtml += '<article class="pipo"> ' + 
            '<img class="autos" src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
            '<h3>' + producto.title + '</h3>' +
            '<p>' + producto.description + '</p>' +
            '<p>$ ' + producto.price + ' USD</p>' +
            '<a class="ver-mas" href="./product.html?id=' + producto.id + '">Ver detalle</a>' +
            '</article>';
    }
    seccion1.innerHTML=contenidoHtml;
})
.catch(function(error){
    console.log("Error: "+error);
})

/* Segunda categoría - mobile-accessories \*/ 
fetch('https://dummyjson.com/products/category/mobile-accessories') 
.then(function(response) { 
    return response.json(); 
    
}) 
.then(function(data) { 
    let productos = data.products; 
    let contenidoHtml = "";  

    for (let i = 0; i < productos.length; i++) { 
        let producto = productos[i]; 
        
    let contenidoHtml = ""; 
    

    for (let i = 0; i < productos.length; i++) { 
        let producto = productos[i];
        contenidoHtml += '<article class="pipo"> ' + 
            '<img class="autos" src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
            '<h3>' + producto.title + '</h3>' +
            '<p>' + producto.description + '</p>' +
            '<p>$ ' + producto.price + ' USD</p>' +
            '<a class="ver-mas" href="./product.html?id=' + producto.id + '">Ver detalle</a>' +
            '</article>'; 
    } 
        
    seccion2.innerHTML = contenidoHtml; 
}) 
.catch(function(error) { 
    console.log("Error: " + error); 
    seccion2.innerHTML = "<p>Error al cargar la segunda sección.</p>"; 
});