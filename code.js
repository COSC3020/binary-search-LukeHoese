function binarySearch(list, element) {
    var listStart = 0;
    var listEnd = (list.length - 1);

    while (listStart <= listEnd) {
        var listMid = Math.floor((listStart + listEnd) / 2);
        // element found, return index
        if (list[listMid] === element) {
            // This line fixed things but I get the feeling it is a bit of a "bandaid on a bullet hole", What was the real problem and what is a proper solution?
            if (list[0] === list[listMid]) {
                return 0;
            }
            return listMid;
        }
        // element smaller than mid, adjust search to smaller half of list
        if (element < list[listMid]) {
            listEnd = listMid - 1;
        }
        // element larger than mid, adjust search to larger half of list
        else if (element > list[listMid]) {
            listStart = listMid + 1;
        }
    }
    return -1;
}
