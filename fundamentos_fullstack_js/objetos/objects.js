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

// primer ejercicio de receta maestra
// 

igs: var ingredientes = {
ingrediente1: {id: 1, name:"leche en polvo", medida1: "1 litro"},
ingrediente2: {id: 2, name :"chocolate en barra", medida2: "3 barras"},
ingrediente3: {id: 3, name: "azucar", medida3: "3 gramos"},
mixIngredientes: function mix(){ (console.log ("Mezclando los ingredientes"))}
}
function receta(){
    console.log("Necesitas los siguientes ingredientes: ")
    console.log(ingredientes.ingrediente1.id + " " + ingredientes.ingrediente1.name + ", " + ingredientes.ingrediente1.medida1);
    console.log(ingredientes.ingrediente2.id + " " + ingredientes.ingrediente2.name + ", " + ingredientes.ingrediente2.medida2);
    console.log(ingredientes.ingrediente3.id + " " + ingredientes.ingrediente3.name + ", " + ingredientes.ingrediente2.medida3);
}

function orden_receta(){
    var paso1  = ("Primero agrega " + ingredientes.ingrediente1.medida1 + " de " + ingredientes.ingrediente1.name);
    var paso2 = ("Después agrega " + ingredientes.ingrediente2.medida2 + " de " + ingredientes.ingrediente2.name);
    var paso3 = ("Por último agrega " + ingredientes.ingrediente3.medida3 + " de " + ingredientes.ingrediente3.name);
    console.log(paso1);
    console.log(paso2);
    console.log(paso3);
}


console.log(receta());
console.log(orden_receta());
console.log(ingredientes.mixIngredientes());