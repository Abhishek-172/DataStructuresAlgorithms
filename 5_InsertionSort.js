// Array - [7,6,1,4,8]

function InsertionSort(arr) {
    let currVal;
    for (i = 1; i < arr.length; i++) {
        currVal = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > currVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j + 1] = currVal;
    }
    return arr;
}

console.log(InsertionSort([7, 6, 1, 4, 8]));