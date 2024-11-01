function binarySearch(list, element) {
    var listStart = 0;
    var listEnd = (list.length - 1);

    while (listStart <= listEnd) {
        var listMid = ((listStart + listEnd) / 2);
        // element found, return index
        if (list[listMid] === element) {
            return listMid;
        }
        // element smaller than mid, adjust search to smaller half of list
        if (element < list[listMid]) {
            listEnd = mid - 1;
        }
        // element larger than mid, adjust search to larger half of list
        else {
            listStart = mid + 1;
        }
    return -1;
    }
}
