// This function is a "sync" function,
// which means it will be executed immediately
function syncFunction() {
    console.log('executing sync function')
}

// The next three other function are "async" functions
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

// this is an "anonymous" function,
// which is basically a function without declaration that call itself
(async function () {
    syncFunction() // will be executed immediately
    await asyncFunctionOne() // will be executed after 3 seconds
    await asyncFunctionTwo() // will be executed after 6 seconds
    await asyncFunctionThree() // will be executed after 9 seconds
})()