function myEach(collection, callback) {
    let newCollection;
    if (typeof collection === "object") {
        newCollection = Object.assign(collection); // Create a shallow copy of the object
        collection = Object.values(collection); // Convert object values to an array
    }
    for (let i = 0; i < collection.length; i++) {
        callback(collection[i]); // Apply the callback to each element
    }
    return newCollection; // Return the original object if it was one
}
function myReduce(collection, callback, acc) {
    if (typeof collection === "object") {
        collection = Object.values(collection); // Convert object values to an array
    }
    let accum = acc; // Initialize accumulator
    let j = 0;
    if (acc === undefined) {
        accum = collection[0]; // Default the accumulator to the first element
        j = 1; // Start reducing from the second element
    }
    for (let i = j; i < collection.length; i++) {
        accum = callback(accum, collection[i], collection); // Update the accumulator
    }
    return accum; // Return the reduced value
}
function myFind(collection, predicate) {
    if (typeof collection === "object") {
        collection = Object.values(collection); // Convert object values to an array
    }
    for (const element of collection) {
        if (predicate(element)) {
            return element; // Return the first matching element
        }
    }
}
function myFilter(collection, predicate) {
    if (typeof collection === "object") {
        collection = Object.values(collection); // Convert object values to an array
    }
    let arr = [];
    for (const element of collection) {
        if (predicate(element)) {
            arr.push(element); // Add matching elements to the result array
        }
    }
    return arr; // Return the filtered array
}
function mySize(collection) {
    if (typeof collection === "object") {
        collection = Object.values(collection); // Convert object values to an array
    }
    let counter = 0;
    for (const element of collection) {
        counter++; // Count each element
    }
    return counter; // Return the count
}
function myFirst(array, n) {
    if (n === undefined) {
        return array[0]; // Return the first element
    } else {
        const returnArray = [];
        for (let i = 0; i < n; i++) {
            returnArray.push(array[i]); // Collect the first `n` elements
        }
        return returnArray; // Return the collected elements
    }
}
