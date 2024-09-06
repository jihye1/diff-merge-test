// // comment line 1
// function CWE_398() { // IDENTICAL_BRANCHES
//     if (x >= 0) {
//         y = x;
//     } else {
//         y = x;
//     }
// }

function CWE_480_481() { // BAD_ASSIGN_IN_CONDITION
    var x = -1;
    if (x = -1) console.log('Error!', x);
}


// comment line
// comment line
