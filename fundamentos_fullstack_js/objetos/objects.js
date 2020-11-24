//var products = [
//  { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//  { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//  { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
//];
//  Primero la funcion va a iterar sobre la longitud del arreglo, luego va a imprimir el nombre, luego el id del producto, el precio y las categorias. Como las categorias son un arreglo, usamos join y ", " para unirlas en un string. 
//for (var i=0; i < products.length; i++) {
//  var product = products[i];
//  console.log(product.name);
//  console.log("  Id: " + product.id);
//  console.log("  Precio: " + product.price);
//  console.log("  Categorías: " + product.categories.join(", "));
//}

// primera ejercicio de receta maestra


var ingredientes = [
    {ingrediente1: "leche en polvo", medida1: "1 litro"},
    {ingrediente2: "chocolate en barra", medida2: "3 barras"},
    {ingrediente3: "azucar", medida3: "3 gramos"}]

console.log(ingredientes);
