// Array - [10, 1, 2, 11, 20, 9]

function SelectionSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        let small = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[small]) {
                small = j;
            }
            if (j == arr.length - 1) {
                temp = arr[i];
                arr[i] = arr[small];
                arr[small] = temp;
            }
        }
    }
    return arr;
}

console.log(SelectionSort([10, 1, 2, 11, 20, 9]));