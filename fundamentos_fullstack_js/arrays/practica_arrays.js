 
//var array = ["Simon", "Natalia", "Nayib", "Diana", "German"];

//function print_array (array){
//	console.log(array);}

//console.log(print_array(array));


//var array = [1,2,3,4,5];

//function imprimir_elemento(pos1, pos2){
//	console.log("Los elementos a imprimir son " + array[pos1] + " y " +  array[pos2]);}

//var pos1 = 1;
//var pos2 = 3;

//console.log(imprimir_elemento(pos1,pos2));


//var array = ["Primero", "Segundo", "Tercero", "Cuarto"];

//array.push("Soy el ultimo elemento");

//console.log(array); 



//var array = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el ultimo"];

//var new_array = ["Quinto", "Sexto"];

//array.splice (4,0,new_array [0]);
//array.splice(5,0,new_array[1]);

//function imprimir_elemento(indice)
//		{
//			
//			while (indice < array.length)
//			{
//				console.log(array[indice]);
//				indice = indice + 1;
//			}
//			}
//indice = 0

//console.log(imprimir_elemento(indice));
			


var ages = [12, 3, 5, 44, 18, 2, 55, 26];

function print_adults(index){
					while (index < ages.length){
						if (ages[index] >= 18)
						{
						console.log(ages[index]);
					  index = index + 1;
				  }
				  else{ 
				  	index = index + 1;
				  }
				  	}
				  	}
index = 0;

console.log(print_adults(index));

													 
