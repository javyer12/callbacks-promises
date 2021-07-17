const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("do something"), 3000)
            : reject(new Error("nuevo error"))
    })
}
const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}
console.log("before")
doSomething()
console.log("after")

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    } catch (err) {
        console.error(err)
    }
}
console.log("before")
anotherFunction()
console.log("after")
