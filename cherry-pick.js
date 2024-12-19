function CWE_129(x) { // ARRAY_INDEX_NEGATIVE(pr-head-4)
    var arr = [1, 2, 3];
    if (x < 0) {
        arr[x] = 3;
    }
}
