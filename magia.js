let numeros = [2,4,6];

let suma = numeros.reduce(function(acumulador,numero){
    return acumulador * numero

})

let nombres = ['Jose','Maria','Ricardo','Patricio','Jose','Maria','Jose','Sebastian'];

let cantidadNombres = nombres.reduce( function(contador, nombre){

        contador[nombre] = (contador[nombre] || 0) + 1

    return contador

},{})

console.log(cantidadNombres)
