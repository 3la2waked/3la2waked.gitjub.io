function sumArray(array) {
    return array.reduce((x, y) => x + y, 0);
}

function reverse(str) {
    return str.split("").reverse().join("");
}

function filterLongWords(arr, i) {
    return arr.filter(function (word) {
        return word.length > i;
    });
}

function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

console.log("Expected output of sumArray([7, 9, 8, 22, 19]) is 65  " + myFunctionTest(65, function () {
    return sumArray([7, 9, 8, 22, 19]);
}));

console.log("Expected output of reverse('ala fandi') is idnaf ala  " + myFunctionTest('idnaf ala', function () {
    return reverse('ala fandi');
}));

console.log("Expected output of filterLongWords(['hello', 'world', 'car', 'ambulance'], 4) is ['hello', 'world', 'ambulance']  " + myFunctionTest(['hello', 'world', 'ambulance'], function () {
    return filterLongWords(['hello', 'world', 'car', 'ambulance'], 4);
}));