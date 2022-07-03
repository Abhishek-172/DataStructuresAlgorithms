// BubbleSort is used to Sort the Array
//Example Array - [9,  8,  7,  6 , 1,  2,  3,  4]
                // j   j+1                     i

// TimeComplexity: O(n^2) 
function BubbleSort(Array) {
    let temp = 0;
    for (let i = Array.length; i > 0; i--) {
        let noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (Array[j] > Array[j + 1]) {
                temp = Array[j + 1];
                Array[j + 1] = Array[j];
                Array[j] = temp;
                noSwap = false;
            }
            if (noSwap) {
                break;
            }
        }
    }
    return Array;
}

console.log(BubbleSort([9, 8, 7, 6, 1, 2, 3, 4]));