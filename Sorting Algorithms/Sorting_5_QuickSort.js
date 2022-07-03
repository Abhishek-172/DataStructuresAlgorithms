// Array - [4,8,2,1,5,7,6,3]
function PivotHandler(arr, start = 0, end = arr.length-1) {
    let swappedIndex = start;
    let pivot = arr[start];

    function swap(arr, index1, index2) {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
        return arr;
    }

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swappedIndex++;
            swap(arr, swappedIndex, i);
        }
    }
    swap(arr, swappedIndex, start);
    return swappedIndex;
}


function QuickSort(arr, left = 0, right = arr.length-1) {
    if (left < right) {
        let pivot = PivotHandler(arr, left, right);
        QuickSort(arr, left, pivot - 1);
        QuickSort(arr, pivot + 1, right);
    }    
    return arr;
}

console.log(QuickSort([4, 8, 2, 1, 5, 7, 6, 3]));