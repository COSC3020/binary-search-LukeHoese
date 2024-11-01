// Copy-Paste testing ChatGPT's code to see if this is a valid solution

function binarySearch(list, element) {
    var listStart = 0;
    var listEnd = (list.length - 1);
    var firstIndex = -1;

    // Find the first occurrence
    while (listStart <= listEnd) {
        var listMid = Math.floor((listStart + listEnd) / 2);
        if (list[listMid] === element) {
            firstIndex = listMid; // Store first occurrence
            listEnd = listMid - 1; // Keep searching in the left half
        } else if (element < list[listMid]) {
            listEnd = listMid - 1;
        } else {
            listStart = listMid + 1;
        }
    }

    if (firstIndex === -1) return -1; // Element not found

    // Now find the last occurrence
    listStart = firstIndex;
    listEnd = list.length - 1;
    var lastIndex = firstIndex;

    while (listStart <= listEnd) {
        var listMid = Math.floor((listStart + listEnd) / 2);
        if (list[listMid] === element) {
            lastIndex = listMid; // Update last occurrence
            listStart = listMid + 1; // Keep searching in the right half
        } else if (element < list[listMid]) {
            listEnd = listMid - 1;
        } else {
            listStart = listMid + 1;
        }
    }

    return [firstIndex, lastIndex]; // Return both indices
}

