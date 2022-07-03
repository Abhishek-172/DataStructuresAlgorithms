// Array - [8,1,5,3,4,10,12,66,98,65]
function MergeSort(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;   
    }
    return results;
}


function Merge(arr) {
    // Base Case
    let mid, left, right;
    if (arr.length <= 1) {
        return arr;
    }
    // Find a Mid Value
    mid = Math.floor(arr.length / 2);
    // Find a Left SubArray, and do the recursive call
    left = Merge(arr.slice(0,mid));
    // let right = mergeSort(arr.slice(mid));
    // Find a Right SubArray, and do the recursive call
    right = Merge(arr.slice(mid));
    // Call a MergeSort Function with left and Right SubArray
    return MergeSort(left, right);
}

console.log(Merge([8,1,5,3,4,10,12,66,98,65]));