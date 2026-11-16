/* 1\. Captura de la Query String de la URL y obtención del id del producto*/ 
let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString); 
let id = queryStringObj.get('id');

/* 2\. Selección de los elementos del DOM mediante querySelector*/ 
let imagen = document.querySelector("#producto-imagen"); 
let categoria = document.querySelector("#producto-categoria"); 
let nombre = document.querySelector("#producto-nombre"); 
let marca = document.querySelector("#producto-marca"); 
let precio = document.querySelector("#producto-precio"); 
let descripcion = document.querySelector("#producto-descripcion"); 
let stock = document.querySelector("#producto-stock"); 
let tags = document.querySelector("#producto-tags"); 
let listaReviews = document.querySelector("#lista-reviews");

fetch('https://dummyjson.com/products/' + id) 
    .then(function(response) { 
        return response.json(); 
    }) 
    .then(function(data) { /* Carga de la imagen y texto alternativo*/ 
        imagen.src = data.thumbnail; 
        imagen.alt = data.title; /* Carga del nombre y la descripción*/ 
        nombre.innerText = data.title; 
        descripcion.innerText = data.description;  
        
        if (data.brand) { 
            marca.innerText = "Marca: " + data.brand; 
        } else { 
            marca.innerText = "Marca: No especificada"; 
        } 
        
        precio.innerText = "Precio: $" + data.price + " USD"; 
        stock.innerText = "Stock disponible: " + data.stock + " unidades"; 
        
        categoria.innerText = "Categoría: " + data.category; 
        categoria.href = "./category.html?cat=" + data.category; 
        
        let textoTags = "Tags: "; 
        if (data.tags) { 
            for (let i = 0; i < data.tags.length; i++) { 
                if (i < 3) { 
                    if (i > 0) { 
                        textoTags += ", "; 
                    } 
                    textoTags += data.tags[i]; 
                } 
            } 
        } 
        
        tags.innerText = textoTags; 
        
        /* 4\. Carga dinámica de la sección de comentarios / reviews*/ 
        let htmlReviews = ""; 
        if (data.reviews) { 
            for (let i = 0; i < data.reviews.length; i++) { 
                let review = data.reviews[i]; 
                htmlReviews += 
                '<li>' + 
                '<p>Usuario: ' + review.reviewerName + '</p>' + 
                '<p>Rating: ' + review.rating + ' / 5</p>' + 
                '<p>Comentario: ' + review.comment + '</p>' + 
                '<p>Fecha: ' + review.date + '</p>' + 
                '</li>'; 
            } 
        } 
        
        listaReviews.innerHTML = htmlReviews; 
    }) 
    .catch(function(error) { 
        console.log('El error es: ' + error); 
});