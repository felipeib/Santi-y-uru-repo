let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString); 
let categoria = queryStringObj.get('cat'); 

let titulo = document.querySelector("#titulo-categoria"); 
let listaProductos = document.querySelector("#lista-categoria"); 

if (categoria) { 
    
    titulo.innerText = "Categoría: " + categoria; 

    fetch('https://dummyjson.com/products/category/' + categoria) 
    .then(function(response) { 
        return response.json(); 
    }) 
    .then(function(data) { 
        let productos = data.products; 
        let contenidoHtml = ""; 
        
        if (productos && productos.length > 0) { 
            for (let i = 0; i < productos.length; i++) { 
                let producto = productos[i]; 
                 
                contenidoHtml += 
                '<article>' + '' + 
                '<h3>' + producto.title + '</h3>' + 
                '<p>' + producto.description + '</p>' + 
                '<p>Precio: $' + producto.price + ' USD</p>' + 
                '<a href="./product.html?id=' + producto.id + '">Ver detalle</a>' + 
                '</article>'; 
            } 
            
            listaProductos.innerHTML = contenidoHtml; 
        } 
        else {
            listaProductos.innerHTML = "<p>No se encontraron productos para esta categoría.</p>"; 
        } 
    }) 
    .catch(function(error) { 
        console.log("Error al cargar la categoría: " + error); 
        listaProductos.innerHTML = "<p>Ocurrió un error al cargar los productos.</p>"; 
    }); 
} 
else { 
    titulo.innerText = "Categoría no especificada"; 
    listaProductos.innerHTML = "<p>No se indicó una categoría en la URL.</p>"; 
}
