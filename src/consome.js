const fetch = require('node-fetch');

const url = "http://localhost:3000/api/categorias";

async function getCategorias() {

    const response = await fetch(url);
    const categorias = await response.json();

    // Imprime as categorias (teste)
    for (i=0;i<categorias.length;i++){
        console.log (categorias[i].name);
    }

    return(categorias); // Função retorna Json
}

getCategorias()