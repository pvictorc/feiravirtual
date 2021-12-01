const fetch = require('node-fetch');

const url = "http://localhost:3000/api/categorias";

fetch(url)  
    .then( (response) => response.json())  
    .then((data)=> console.log(data))// output will be the required data  
    .catch( (error) => console.log(error))

// console.log( response );