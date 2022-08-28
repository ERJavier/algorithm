/**
 * Temporary -> O(n)
 * Space -> ()
 */

const linearSearch = (array, key) => {
    for (let i = 0; i < array.length; i++) { // O(n)
        if (array[i] === key) { // O(1)
            return i; // O(1)
        }
        
    } // O(1)
}