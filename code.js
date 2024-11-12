function binarySearch(list, element) {
    var listStart = 0;
    var lowestIndex = -1;
    var listEnd = (list.length - 1);

    while (listStart <= listEnd) {
        var listMid = Math.floor((listStart + listEnd) / 2);
        // element found, set new lowest index
        if (list[listMid] === element) {
            lowestIndex = listMid;
        }
        // element smaller than mid, adjust search to smaller half of list
        if (element <= list[listMid]) {
            listEnd = listMid - 1;
        }
        // element larger than mid, adjust search to larger half of list
        else if (element > list[listMid]) {
            listStart = listMid + 1;
        }
    }
    return lowestIndex;
}
