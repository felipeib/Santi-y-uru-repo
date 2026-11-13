/* capturo los titulos para la lista de categorias */
let listaCategorias = document.querySelector("#lista-categorias");

fetch("https://dummyjson.com/products/categories")
.then(function (response) {
    return response.json();
})
.then(function (categorias) {
    let contenidoHtml = "";

    for (let i = 0; i < categorias.length; i++) {
        let categoria = categorias[i];

        contenidoHtml += '<li>' +
            '<a class="lista" href="./category.html?slug=' + categoria.slug + '">' +
            categoria.name +
            '</a>' +
            '</li>';
    }

    listaCategorias.innerHTML += contenidoHtml;
})
.catch(function (error) {
    console.log("Error: " + error);
});