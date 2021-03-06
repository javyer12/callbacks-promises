let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

const fetchData = (url_api, callback) => {
    return new Promise((resolve, reject) => {
    const  xhttp = new XMLHttpRequest() //aporte de microsoft a js
    xhttp.open('GET', url_api, true)
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error("Error", url_api))
            }
        });
    xhttp.send()
    })
}
module.exports = fetchData;