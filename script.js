// This function is a "sync" function,
// which means it will be executed immediately
function syncFunction() {
    console.log('executing sync function')
}

// The next three other functions are "asynchronous" functions
// which means they're gonna return a Promise,
// a Promise can be awaited until the function is resolved by calling "resolve()"
function asyncFunctionOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('executing async function 1')
            resolve()
        }, 3000)
    })
}

function asyncFunctionTwo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('executing async function 2')
            resolve()
        }, 3000)
    })
}

function asyncFunctionThree() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('executing async function 3')
            resolve()
        }, 3000)
    })
}

// call all the previous functions asynchronously
async function callAllFunctions() {
    syncFunction() // will be executed immediately
    await asyncFunctionOne() // will be executed after 3 seconds
    await asyncFunctionTwo() // will be executed after 6 seconds
    await asyncFunctionThree() // will be executed after 9 seconds
}



/*
* The following functions test how async functions would work inside loops
*/

// await inside a recursion function will work
let i = 0
async function recursion() {
    if (i < 3) {
        await asyncFunctionTwo()
        i++
        recursion()
    }
}

// await inside a "for" loop will work
async function awaitInsideForLoop() {
    for (let i = 0; i < 3; i++) {
        await asyncFunctionTwo()
        console.log('after the await', i)
    }
}

// if we use the "then" approach inside "for" loop it won't work
function awaitWithThen() {
    for (let i = 0; i < 3; i++) {
        asyncFunctionTwo().then(() => {
            console.log('after then', i)
        })
    }
}

// callAllFunctions()
// recursion()
// awaitInsideForLoop()
// awaitWithThen()