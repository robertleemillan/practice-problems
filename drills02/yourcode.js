// - countOccurences
// - given an array of words and a separate word, count how many times a particular word given occurs within that array for example:
// - input ['dog','cat','dog','pig','canary','cat','dog'], 'dog' 
// - returns 3

function countOccurences(words, word) {
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        if (word == words[i]) {
            count++;
        }
    }
    return count;
}

// - wordLengths
// - given an array of words, return an array of numbers representing the length of each word For example: 
// - input ['canary','silly','dog','a','mellow']) 
// - return [6,5,3,1,6]
    
function wordLengths(words) {
    var wordLengths = [];
    for (var i =0; i < words.length; i++) {
        wordLengths[i] = words[i].length;
    }
    return wordLengths;
}

// - getMinMaxMean
// - given an array of numbers, get the minimum, maximum, and mean numbers. Return them as an object. Mean is another word for average For example:
// - input [3,1,9,12,4] 
// - return: {min: 1, max: 12, mean: 25.8}

function getMinMaxMean(numbers) {
    var min = 0,
        max = 0,
        sum = 0,
        mean = 0;
    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        if (number > max) {
            max = number;
        } else if (min == 0 || number < min) {
            min = number;
        }
        sum += number;
    }
    return {
        min: min,
        max: max,
        mean: (sum / numbers.length)
    }
}

// - findMode
// - Given an array of numbers, find the number that occurs the most often for example: 
// - input [5,2,7,18,2,42,5,2] 
// - returns 2, since it occurs 3 times. If 2 numbers occur the same amount, return the last one
    
function findMode(numbers) {
    var theNumber = 0,
        theCount = 0;
    for (var i = 0; i < numbers.length; i++) {
        var theCurrentNumber = numbers[i],
            theCurrentCount = 0;
        for (var j = 0; j < numbers.length; j++) {
            var theComparedNumber = numbers[j];
            if (theCurrentNumber == theComparedNumber) {
                theCurrentCount++;
            }
        }
        if (theCurrentCount >= theCount) {
            theCount = theCurrentCount;
            theNumber = theCurrentNumber;
        }
    }
    console.log(theCurrentNumber, theCurrentCount, theNumber, theCount)
    console.log("---")
    return theNumber;
}