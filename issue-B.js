
function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    } else {
        y = x;
    }
}

// function CWE_129(x) { // ARRAY_INDEX_NEGATIVE
//     var arr = [1, 2, 3];
//     if (x < 0) {
//         arr[x] = 3;
//     }
// }

function CWE_476() { // NULL_POINTER
    var obj;
    // Add 1 line
    var y = obj.x;
    console.log(y);
}

function CWE_489_569_570_571() { // CONSTANT_CONDITION
    var x = "Fo";
    var y = x + "Bar";
    if (y === "FooBar") {
        console.log('Do something');
    }
}
