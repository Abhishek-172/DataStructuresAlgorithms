// Condition: Array Must Be Sorted Array
// array - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Target Number - 10
function BinarySearch(arr, target) {
    let start = 0;
    let end = arr.length;
    let mid = Math.floor((start + end) / 2);

    while (arr[mid] != target && start < end) {
        if (target > arr[mid]) {
            // Update the start index
            start = mid + 1;
        }
        if (target < arr[mid]) {
            // Updated the end index
            end = mid -  1;
        }
        mid = Math.floor((start + end) / 2);
    }
    if (arr[mid] == target) {
        return 1;
    }
    return -1;
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));