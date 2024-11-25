//const url = "https://65418746f0b8287df1fe755a.mockapi.io/api/TpiLab3/categorias";
const url = "https://673d1ccf4db5a341d834122c.mockapi.io/categorias";

async function listar(id) {
    let cadUrl;
    if(isNaN(id))
      cadUrl= url;
    else 
      cadUrl = url + "/" + id;  
    return await fetch(cadUrl)
        .then(respuesta => respuesta.json());
}

async function crear(descripcion) {

    return await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            descripcion: descripcion
        })
    })
}

async function editar(id, descripcion) {

    let urlPut = url + "/" + id;
    return await fetch(urlPut, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            descripcion: descripcion
        })
    })
}

async function borrar(id){
  
    let urlPut = url + "/" + id;
    return await fetch(urlPut, {
            method: 'DELETE'
       })
}

export const categoriasServices = {
    listar,
    crear,
    editar,
    borrar
}