//Reto de sumar propiedades:

//Crea una función que tome un array de objetos, donde cada objeto representa una persona con propiedades "nombre" y "edad". La función debe devolver la suma de las edades de todas las personas en el array.

const persona_propiedades = [ 
        {
            nombre: "Soflan",
            edad: 19,
        },
        {
           nombre: "yeison",
           edad: 21, 
        }
]

const suma_de_edades = () =>  {             //creo una funcion
    let edad_total = 0
    persona_propiedades.forEach(element => {
        edad_total += element.edad
    });

    console.log( edad_total );

}

suma_de_edades (); //ejecuto una funcion


//Reto de filtrar objetos:

//Crea una función que tome un array de objetos, donde cada objeto representa un producto con propiedades "nombre" y "precio". La función debe devolver un nuevo array con los productos que tienen un precio mayor a 50.

const productos = [
    {
        nombre: "sancocho",
        precio: 50
    },

     {
        nombre: "papitas",
        precio: 20
    },
    
     {
        nombre: "salchichon",
        precio: 90
    },
    
     {
        nombre: "perejil",
        precio: 10
    },

    {
        nombre: "Donas",
        precio: 100
    }
    
]

const nuevo_array_precios_mayor_a_50  = () =>  { 
    let nuevo_array = [];
    productos.forEach(element => {
    
        if (element.precio > 50 ) {
              nuevo_array.push(element)
        }
    });
    console.log (nuevo_array)
}

nuevo_array_precios_mayor_a_50();

//Reto de encontrar objeto por propiedad:

//Crea una función que tome un array de objetos, donde cada objeto representa un estudiante con propiedades "nombre" y "calificación". La función debe recibir un nombre y devolver el objeto del estudiante con ese nombre, o null si no se encuentra.


const estudiantes = [

    {
        nombre: "Yeison",
        calificacion: 5 
    },

     {
        nombre: "Sofia",
        calificacion: 3.9
    },

     {
        nombre: "Mariana",
        calificacion: 5
    },

     {
        nombre: "Kevin",
        calificacion: 4
    },

     {
        nombre: "Salomon",
        calificacion: 3
    }

]

const encontrar_estudiante = ( nombre ) => {

    let resultado = null

    estudiantes.forEach(element => {
        if (element.nombre == nombre ) {
            resultado = element 
        }
    });

     return resultado
}

let guardar_objeto = encontrar_estudiante("Sofia");

console.log (guardar_objeto);

//Reto de ordenar objetos:

//Crea una función que tome un array de objetos, donde cada objeto representa un producto con propiedades "nombre" y "precio", y devuelva un nuevo array ordenado por el precio de menor a mayor.


