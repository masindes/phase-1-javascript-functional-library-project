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
