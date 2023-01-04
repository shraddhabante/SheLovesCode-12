// •	Using conditional statements and Take user input and display data in UI
// given number is multiple of 3 or not e.g.10900
// var num=10900;
function multiple() {
    var num = document.getElementById("num").value;
    if (Number(num) % 3 == 0) {
        document.getElementById("dispaly").innerHTML = "divisible by 3";
    }
    else {
        document.getElementById("display").innerHTML = "not divisible";
    }
}

// check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not
function string() {
    var str = document.getElementById("str").value;
    var num = str.includes("js")
    document.getElementById("match").innerHTML = num;
}

// calculate simple interest ((p/r )* t) / 100 )
function simpleInterest() {
    var p = document.getElementById("simplep").value;
    var r = document.getElementById("simpler").value;
    var t = document.getElementById("simplet").value;
    var si = p * r * t;
    document.getElementById("si").innerHTML = "Simple Interest: " + si;
}
// given year leap year or not (29 in feb)
function leapYear() {
    var yr = document.getElementById("year").value;
    if (Number(yr) % 4 == 0) {
        document.getElementById("lyear").innerHTML = yr + " " + "is a leap year";
    }
    else {
        document.getElementById("lyear").innerHTML = yr + " " + "is not a leap year";
    }
}

// 0-6 display day week depending upon what user is entering (0-> sunday) : using switch
function weekDay() {
    var day = document.getElementById("day").value;
    switch (Number(day)) {
        case 1:
            document.getElementById("dayweek").innerHTML = "Monday";
            break;
        case 2:
            document.getElementById("dayweek").innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById("dayweek").innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById("dayweek").innerHTML = "Thursday";
            break;
        case 5:
            document.getElementById("dayweek").innerHTML = "Friday";
            break;
        case 6:
            document.getElementById("dayweek").innerHTML = "Satday";
            break;
        case 7:
            document.getElementById("dayweek").innerHTML = "sunday";
            break;

    }
}
// •	ATM Machine
// balance & query
// withdraw (amount)
// change pin
// mini statement
// saving & current acc.
// print receipt
// enter pin number

// •	use loops, conditional statements, take input from user
// multiplication table (ask number from user)
function mulTable() {
    var mul = document.getElementById("multilication").value;
    var arr = []
    for (let i = 1; i <= 10; i++) {
        var result = mul + "*" + i + "=" + mul * i;
        arr.push(result);
        document.getElementById("table").innerHTML = arr;
    }
}

// sum of digits: e.g. (123: 1 + 2 + 3 = 6) or (1234 : 1 + 2 + 3 + 4 = 10) : hint - loops, divisor and modulus
function sumDigit() {
    var n = document.getElementById("sum").value;
    var sum = 0;
    while (Number(n) != 0) {
        var r = n % 10;
        sum = sum + r;
        n = n / 10;
    }
    document.getElementById("addition").innerHTML = Math.trunc(sum);
}

//* palindrome string (aca: aca(reverse) is a palindrome, abc: cba is not a palindrome): use loops
function palindrome() {
    var x = aca;
    var len = x.length;
    // var arr = [];
    for (var i = 0; i < len / 2; i++) {
        if (x[i] == x[len - 1 - i]) {
            // arr.push(x[i]);
            document.getElementById('show-palindrome').innerHTML = "the string is palindrome" + x;
        }
    }
    document.getElementById('show-palindrome').innerHTML = "the string is not palindrome" + x;
}



// display even numbers upto n number (ask user for number)
function evenNumber() {
    var num = document.getElementById("even").value;
    var arr = []
    for (var i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            arr.push(i);
            document.getElementById("evenno").innerHTML = arr;
        }
    }
}

// ask user for the input, whether char is vowel or consonant
function ovelConsonant() {
    var x = document.getElementById("consonant").value;
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U') {
        document.getElementById("vowel").innerHTML = x + " " + "is vowel";
    }
    else {
        document.getElementById("vowel").innerHTML = x + " " + "is consonant";
    }
}

// count of even and odd number from 1 to 999
var num = 1000;
var countEven = 0;
var countOdd = 0;
for (var i = 1; i < num; i++) {
    if (i % 2 == 0) {
        countEven += 1;

    }
    else {
        countOdd += 1;
    }
}
console.log(countEven);
console.log(countOdd);

// count occurrence of a particular character in a string (hello: count of l is 2): loops
var str = "hello"
var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] == "l") {
        count += 1
    }
}
document.getElementById("pchar").innerHTML = "Occurance of particular characetr in a string:" + " " + count;

// *sum and average of array elements [1, 9, 8];
function avg() {
    var sum = 0;
    var b=[];
    var c=[];
    var arrElements = [1, 9, 8];
    for (var i = 0; i < arrElements.length; i++) {
        sum = sum + arrElements[i];
        b.push(sum);
    }
    var avg = sum / arrElements.length;
    c.push(avg);
    document.getElementById("sum").innerHTML = "the sum of array is:" +b;
    document.getElementById("average").innerHTML = "the average of array is:" + c;
}
avg();



// largest number in an array (do with loops)
function maxArray() {
    var numArr = [10, 56, 90, 45];
    var max = numArr[0];
    for (var i = 1; i <= numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i];
        }
    }
    document.getElementById("max").innerHTML = "largest number in an array: " + max;
}
maxArray();

// *From 1 to 100, print "foo" if multiple of 3, "bar" if multiple of 5, if multiple of both display "hello" or else print the number
// e.g.
// 1
// 2
// foo
// 4
// bar
// foo
for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("hello");
    }
    else if (i % 3 == 0) {
       console.log("foo")
    }
    else if (i % 5 == 0) {
       console.log("bar");
    }
    else {
        console.log(i);
    }
}

// add only even numbers in an array (array elements to be input by user)
function evenArray() {
    var x = document.getElementById("evenarr").value;
    var arr = [];
    if (x % 2 == 0) {
        arr.push(x);
        document.getElementById("evennum").innerHTML = arr;
    }
}

//* found an element in array [10, 78, 90] return 90 otherwise exit from an array// take user input

// smallest number in an array
function minArray() {
    var numArr = [10, 56, 90, 45];
    var min = numArr[0];
    for (var i = 1; i <= numArr.length; i++) {
        if (numArr[i] > max) {
            min = numArr[i];
        }
    }
    document.getElementById("max").innerHTML = "smallest number in an array: " + min;
}
minArray();

// biggest of even number in an array ([10, 12, 90, 93, 707]): biggest even number is 90
function largeArray() {
    var evenArr = [10, 12, 90, 93, 707];
    var large = evenArr[0];
    for (var i = 0; i < evenArr.length; i++) {
        if (evenArr[i] % 2 == 0) {
            if (evenArr[i] > large) {
                large = evenArr[i];
            }
        }
    }
    document.getElementById("show").innerHTML = "largest number in an array: " + large;
}
largeArray();

// add two array [10,20,30] + [1,2,3]: [11, 22, 33]
var arr1 = [10, 20, 30];
var arr2 = [1, 2, 3];
var arr = [];
// var add=arr1.concat(arr2);
for (var j = 0; j < arr1.length; j++) {
    var sum = arr1[j] + arr2[j];
    arr.push(sum);
}
document.getElementById("merge").innerHTML = "addition of two array: " + arr;

// reverse an array(with loops) [10, 78, 0]: [0, 78, 10]
var orgArray = [10, 78, 0];
var revArray = [];
for (var i = orgArray.length - 1; i >= 0; i--) {
    revArray.push(orgArray[i]);
}
document.getElementById("reverse").innerHTML = "Reverse of Array is: " + revArray;

// reverse a string using loops
var revString = "hello";
var emptyString = " ";
for (var i = revString.length - 1; i >= 0; i--) {
    emptyString = revString.charAt(i) + emptyString;
}
document.getElementById("revstring").innerHTML = "Reverse of Array is: " + emptyString;