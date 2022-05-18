// Example LongString: AbhiomgshekomgPandomgey
// ShortString: omg

// Time Complexity: O(n^2)

function FindSubString(LongString, ShortString) {
    let count = 0;
    for (let i = 0; i < LongString.length; i++) {
        for (let j = 0; j < ShortString.length; j++) {
            if (ShortString[j] != LongString[i + j]) {
                break;
            }
            if (j == ShortString.length - 1) {
                count++;
                break;
            }
        }
    }
    return count;
}

console.log(FindSubString('AbhiomgshekomgPandomgey', 'omg'))