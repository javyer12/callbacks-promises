const fetchData = require('../util/fetchData')
const API = "https://rickandmortyapi.com/api/character/"

fetchData(API)
    .then(data => {
        console.log(data.info.next)
        return fetchData(`${API}${data.results[3].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
       console.log( data.dimension)
    })
    .catch(err => console.error(err))