function myEach(collection, callback) {
    let array = Object.values(collection)
    array.forEach(element => callback(element))
    return collection
} 

function myMap(collection, callback) {
    let array = Object.values(collection)
    let newArray = []
    for(let element of array) {
        newArray.push(callback(element))
    }
    return newArray
}

function myReduce(collection, callback, ...acc) {
    let array = Object.values(collection)
    let newAcc;
    let i;
    if(acc.length > 0) {
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = array[0]
        i = 1
    }
    for(i; i < array.length; i++) {
        newAcc = callback(newAcc, array[i], collection)
    }
    return newAcc
}