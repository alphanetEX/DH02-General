let autos = [
    {
     marca : "Ford",
     modelo : "Fiesta",
     precio: 150000,
     km: 200,
     color : "Azul",
     cuotas : 12,
     anio : 2019,
     patente: "APL123",
     vendido: false
    },
    {
     marca : "Toyota",
     modelo : "Corolla",
     precio: 100000,
     km: 0,
     color : "Azul",
     cuotas : 12,
     anio : 2019,
     patente: "JJK116",
     vendido: false
    }
]

module.exports = autos; 


// Al vender al auto con patente 'JJK116' y luego llamar a la función autos0KM no debe contener ese auto
// Debes usar el metodo autosParaLaVenta dentro de autos0KM

// Errores:
// El atributo / propiedad autosNuevos debe ser una función que recibe un parámetro
// Al llamar a la función autosNuevos debe devolver los el auto que originalmente no cumple con los requisitos
// Al vender al auto con patente 'JJK116' y luego llamar a la función autos0KM no debe contener ese auto

// var arr = ["a", "ab", "c", "ad"], arr2;
// (arr2 = arr.filter(function(elmnt) { return elmnt.indexOf("a") > -1; })).push("aaa");
// // now arr2 is ["a", "ab", "ad", "aaa"]


   
    
    
//     100000/20000