//REPASO


//Tipos de Variables
 /*const
 let */

//Tiops de datos
    //string
    //number
    //boolean
    //undefined
    //null


//Como saber el tipado de una variable
    // const nombre = "Juan"
    //console.log(typeof nombre);


    
//La funcion por la cual vamos a trabajar a lo largo del semestre

//const func = () => {

//}

//IMPORTANTE

//Manejo de arrays

    //OBJETO:

    //const obj = {
    //    name: "Juan",
    //    lastName: "Pedro",
    //    age: 12
    //}

    //ARREGLO:

    //const array = [9,1,24,2, "Juan", false, null] //Pueden tener distinta informacion 

   //Como seleccionar elementos  
const banner = document.querySelector (".banner");  //Preguntar la diferencia con llamar con . y con #
const text = document.querySelector ("h1");

//Si quiero cambiar el texto de mi html como un h1 desde javascript seria:

text.textContent = "chau";

    //Otra forma de selectionar elementos

    const titulo = document.getElementsByTagName("section");

    //Como crear elementos:

    const p = document.createElement ("p");
    p.textContent = "Un textoo";
    // Y para llamarlo seria:

    banner.appendChild(p);


    //Como hacerlo directamente
    banner.innerHTML += "<p>Un textoo</p>  "
