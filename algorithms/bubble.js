const bubble = (array) => {
    let length = array.length; //O(1)
    for (let i = 0; i < length.length; i++) { //O(n)
        for (let j = 0; j < array.length; j++) { // O(n)
            if (array[j] > array[j + 1]) { //O(1)
                let temporary = array[j]; //O(1)
                array[j] = array[j + 1]; //O(1)
                array[j + 1] = temporary; //O(1)
            }            
        }        
    }
    return array; //O(1)
}