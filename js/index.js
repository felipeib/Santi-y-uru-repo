/* Captura de los contenedores en el DOM mediante selector por ID */
let seccion1 = document.querySelector("#seccion-1"); 
let seccion2 = document.querySelector("#seccion-2");

/* categoria elegidad */
let categoria1 = "smartphones"; 
let categoria2 = "mobile-accessories";

/* primera categoria - smartphones */
fetch('https://dummyjson.com/products/category/smartphones') 
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

/* segunda categoria - mobile-accessories */
fetch('https://dummyjson.com/products/category/' + categoria2) 
.then(function(response) { 
    return response.json(); 
}) 
.then(function(data) { 
    let productos = data.products; 
    let contenidoHtml = ""; 

    for (let i = 0; i <= productos.length; i++) { 
        let producto = productos[i];
        contenidoHtml += '<article class="pipo"> ' + 
            '<img class="autos" src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
            '<h3>' + producto.title + '</h3>' +
            '<p>' + producto.description + '</p>' +
            '<p>$ ' + producto.price + ' USD</p>' +
            '<a class="ver-mas" href="./product.html?id=' + producto.id + '">Ver detalle</a>' +
            '</article>';
    }

    seccion2.innerHTML=contenidoHtml;
})
.catch(function(error){
    console.log("Error:"+error);
})