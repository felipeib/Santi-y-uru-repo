/* Captura de los elementos del HTML */
let tituloCategoria = document.querySelector("#titulo-categoria");
let listaCategoria = document.querySelector("#lista-categoria");

/* Leo los datos que vienen en la query string */
let queryString = location.search;
let parametros = new URLSearchParams(queryString);
let slug = parametros.get("slug");
let nombre = parametros.get("nombre");

if (nombre == null) {
    nombre = slug;
}

/* Pido a la API los productos de esa categoría */
fetch("https://dummyjson.com/products/category/" + slug)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    let productos = data.products;

    tituloCategoria.innerText = nombre;

    if (productos.length == 0) {
        listaCategoria.innerHTML = "<p>No hay productos en esta categoría.</p>";
        return;
    }

    let contenidoHtml = "";

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];

        contenidoHtml += '<article class="pipo">' +
            '<img class="autos" src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
            '<h3>' + producto.title + '</h3>' +
            '<p>' + producto.description + '</p>' +
            '<p>$ ' + producto.price + ' USD</p>' +
            '<a class="ver-mas" href="./product.html?id=' + producto.id + '">Ver detalle</a>' +
            '</article>';
    }

    listaCategoria.innerHTML = contenidoHtml;
})
.catch(function (error) {
    console.log("Error: " + error);
});