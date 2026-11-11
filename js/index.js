/* 1\. Captura de los contenedores en el DOM mediante selector por ID */
let seccion1 = document.querySelector("#seccion-1"); 
let seccion2 = document.querySelector("#seccion-2");

/* 2\. Definición de las categorías elegidas para la API */
let categoria1 = "smartphones"; 
let categoria2 = "mobile-accessories";

/* primera categoria */
fetch('https://dummyjson.com/products/category/smartphones') 
.then(function(response) { 
    return response.json(); 
}) 
.then(function(data) { 
    let productos = data.products; 
    let contenidoHtml = ""; 

    for (let i = 0; i < productos.length; i++) { 
        let producto = productos[i];

        contenidoHtml += '<article>' + 
        '' + '<h3>' + data.products[i].title + '</h3>' + 
        '<p>' + data.products[i].description + '</p>' + 
        '<p>Precio: $' + data.products[i].price + '</p>' + 
        '<a href="./product-detail.html?id=' + data.products[i].id + '">ver detalle</a>' + 
        '</article>';
    }

    seccion1.innerHTML=contenidoHtml;
})
.catch(function(error){
    console.log("Error: "+error);
})

/* segunda categoria */
fetch('https://dummyjson.com/products/category/vehicle') 
.then(function(response) { 
    return response.json(); 
}) 
.then(function(data) { 
    let productos = data.products; 
    let contenidoHtml = ""; 

    for (let i = 0; i < productos.length; i++) { 
        let producto = productos[i];
        
        contenidoHtml += '<article>' + 
        '' + '<h3>' + data.products[i].title + '</h3>' + 
        '<p>' + data.products[i].description + '</p>' + 
        '<p>Precio: $' + data.products[i].price + '</p>' + 
        '<a href="./product-detail.html?id=' + data.products[i].id + '">ver detalle</a>' + 
        '</article>';
    }

    seccion2.innerHTML=contenidoHtml;
})
.catch(function(error){
    console.log("Error: "+error);
})