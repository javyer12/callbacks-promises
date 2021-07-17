const fetchData = require('../util/fetchData')
const API = "https://rickandmortyapi.com/api/character/"

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[3].id}`)
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    } catch (err) {
        console.error(err)
    }
}

console.log("before")
anotherFunction(API)
console.log("after")


//callback ventaja: son universales
//desventaja: el callback hell

//promesas: ventaja: se puede enlazar el then con el return y es mas facil de lee
//desventas: no maneja excepciones,si no returnamos el siguiente resultado
// da error, y debe de usar con babel para que el  navegador lo lea.

//async-await ventajas: mas faciles de leer
// desventaja: se debe de esperar que un llamado se cumpla para que otro se cumpla
//ademas nececita de herramientas como babel para que el navegador lo lea
