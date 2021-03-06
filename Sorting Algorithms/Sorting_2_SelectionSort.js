// Array - [5, 3, 4, 1, 2]

function SelectionSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        let small = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[small]) {
                small = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[small];
        arr[small] = temp;       
    }
    return arr;
}

console.log(SelectionSort([5, 3, 4, 1, 2]));