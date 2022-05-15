// Array - [1,2,3,4,5,6,7,8,9]
// Target - 7
// TimeComplexity: O(log n)


function BinarySearch(Array, Target) {
    let start = 0;
    let end = Array.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (Array[mid] != Target && start < end) {
        if (Target > Array[mid]) {
            start = mid + 1;
        }
        if (Target < Array[mid]) {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    if (Array[mid] == Target) {
        return 1;
    }
    return -1;
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 11));