const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("everything is ok")
        } else {
            reject("it's wrong")
        }
    })
    }
    somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))
//result and reject, los dos argumentos que se le pasan a la funcion new Promise
//considerar el factor del tiempo

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("true")
            },2000)
        } else {
            const error = new Error("something bad");
            reject(error)
        }
    })
}
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("array of results", response)
    })
    .catch(err => {
        console.error(err)
    })