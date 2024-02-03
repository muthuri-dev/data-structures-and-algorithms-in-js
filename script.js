/*Write a function that accepts astring input and returns a reversed copy*/
/*Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n */
//option
function addUpTo(n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
//console.log(addUpTo(10));
//option 2
function addUpTo2(n) {
    return (n * (n + 1)) / 2;
}
console.log(addUpTo2(3));
/*Write a function which takes in a string and returns counts of each character in the string */
//charCount("aaaa") return {a:4}
//charCount("hello") returns {h:1;e:1;l:2;o:1}
// my phone number is 23445
//Hello hi <-- case sensitive
//charCount("") <-- empty
function charCount(str) {
    //make object to return at end
    var result = {};
    //loop over string, for each character
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLocaleLowerCase();
        //if the char is a number/letter and key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
        }
        else {
            //if the char is number/letter and  not in object, add it to object and set value to 1
            result[char] = 1;
        }
    }
    //if character is something else (space,period,etc) don't do anything
    //retutn object at end
    return result;
}
console.log(charCount("hello tHere!"));
