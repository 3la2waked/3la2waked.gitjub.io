function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function maxOfThree(x, y, z) {
    var max_val = 0;

    if (x > y) {
        max_val = x;
    } else {
        max_val = y;
    }
    if (z > max_val) {
        max_val = z;
    }
    return max_val;
}

function isVowel(argument){

    var text;
    var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

function sumArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function multiplyArray(array) {
    let result = 1;

    for (let i = 0; i < array.length; i++) {
        result *= array[i];
    }
    return result;
}

function reverse(str) {
    var text = '';

    for (var i = str.length - 1; i >= 0; i--) {
        text += str[i];
    }
    return text.toLowerCase();
}

function findLongestWord(arr) {
    var length = 0;
    for (var i = 0; i < arr.length; i++) {
        if (length < arr[i].length) {
            length = arr[i].length;
        }
    }
    return length;
}

function filterLongWords(arr, i) {
    var q = [],
        k = 0;

    arr.map(function(p, c){
        if(p.split('').length > i) q[k++] = p;
    });

    return q;
}

function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

console.log("Expected output of max(10,1000) is 1000  " + myFunctionTest(1000, function () {
    return max(10, 1000);
}));

console.log("Expected output of maxOfThree(10,1000,1) is 1000  " + myFunctionTest(1000, function () {
    return maxOfThree(10, 1000, 1);
}));

console.log("Expected output of maxOfThree(5,10,5) is 10  " + myFunctionTest(10, function () {
    return maxOfThree(5, 10, 5);
}));

console.log("Expected output of isVowel('r') is false  " + myFunctionTest(false, function () {
    return isVowel('v');
}));

console.log("Expected output of isVowel('u') is true  " + myFunctionTest(true, function () {
    return isVowel('u');
}));

console.log("Expected output of sumArray([7, 9, 8, 22, 19]) is 65  " + myFunctionTest(65, function () {
    return sumArray([7, 9, 8, 22, 19]);
}));

console.log("Expected output of multiplyArray([7, 9, 8]) is 504  " + myFunctionTest(504, function () {
    return multiplyArray([7, 9, 8]);
}));

console.log("Expected output of reverse('ala fandi') is idnaf ala  " + myFunctionTest('idnaf ala', function () {
    return reverse('ala fandi');
}));

console.log("Expected output of reverse('jag testar') is ratset gaj  " + myFunctionTest('ratset gaj', function () {
    return reverse('jag testar');
}));

console.log("Expected output of findLongestWord(['hello', 'world', 'car', 'ambulance']) is 9  " + myFunctionTest(9, function () {
    return findLongestWord(['hello', 'world', 'car', 'ambulance']);
}));

console.log("Expected output of filterLongWords(['hello', 'world', 'car', 'ambulance'], 4) is ['hello', 'world', 'ambulance']  " + myFunctionTest(['hello', 'world', 'ambulance'], function () {
    return filterLongWords(['hello', 'world', 'car', 'ambulance'], 4);
}));