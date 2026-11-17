/* Captura cada dato para el producto*/
let imagen = document.querySelector("#producto-imagen");
let nombreProducto = document.querySelector("#producto-nombre");
let marca = document.querySelector("#producto-marca");
let precio = document.querySelector("#producto-precio");
let descripcion = document.querySelector("#producto-descripcion");
let linkCategoria = document.querySelector("#producto-categoria");
let stock = document.querySelector("#producto-stock");
let tags = document.querySelector("#producto-tags");
let listaReviews = document.querySelector("#lista-reviews");

/* Leo el id que viene en la query string */
let queryString = location.search;
let parametros = new URLSearchParams(queryString);
let id = parametros.get("id");

/* Pido ese producto a la API */
fetch("https://dummyjson.com/products/" + id)
.then(function (response) {
    return response.json();
})
.then(function (producto) {

    /* Los datos del producto, uno por uno */
    imagen.src = producto.thumbnail;
    imagen.alt = producto.title;
    nombreProducto.innerText = producto.title;
    precio.innerText = "$ " + producto.price + " USD";
    descripcion.innerText = producto.description;
    stock.innerText = "Stock: " + producto.stock + " unidades";

    /* La marca puede no venir en algunas categorías */
    if (producto.brand == undefined) {
        marca.innerText = "Marca: sin marca";
    } else {
        marca.innerText = "Marca: " + producto.brand;
    }

    /* La categoría es un link a la página de esa categoría */
    linkCategoria.innerText = "Categoría: " + producto.category;
    linkCategoria.href = "./category.html?slug=" + producto.category;

    /* Hasta 3 tags */
    let cantidadTags = producto.tags.length;

    if (cantidadTags > 3) {
        cantidadTags = 3;
    }

    let textoTags = "";

    for (let i = 0; i < cantidadTags; i++) {
        textoTags = textoTags + producto.tags[i] + " ";
    }

    tags.innerText = "Tags: " + textoTags;

    /* Los comentarios */
    let contenidoHtml = "";

    for (let i = 0; i < producto.reviews.length; i++) {
        let review = producto.reviews[i];

        contenidoHtml += '<li class="polar-1">' +
            '<p>Rating: ' + review.rating + '</p>' +
            '<p>' + review.comment + '</p>' +
            '<p>' + review.date + '</p>' +
            '<p>' + review.reviewerName + '</p>' +
            '</li>';
    }

    listaReviews.innerHTML = contenidoHtml;
})
.catch(function (error) {
    console.log("Error: " + error);
});