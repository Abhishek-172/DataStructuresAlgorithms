// Array - [10, 1, 2, 11, 20, 9]

function BubbleSort(arr) {
    let temp;
    for (let i = arr.length - 1; i > 0; i--) {
        let nowsap = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noswap = false;
            }
            if (noswap) {
                break;
            }
        }
    }
    return arr;
}

console.log(BubbleSort([10, 1, 2, 11, 20, 9]));