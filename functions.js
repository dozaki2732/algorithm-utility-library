//converting celsius to fahrenheit
function convertCtoF(celsius) {
   let fahrenheit = celsius * (9 / 5) + 32;
   return fahrenheit;
}

// Reverse a String
function reverseString(str) {
   let result = str.split("").reverse().join("");
   return result;
}

// Factorialize a Number
function factorializeNumber(num) {
   let result = 1;
   for (let i = num; i > 0; i--) {
      result *= i;
   }
   return result;
}

// Find the Longest Word in a String
function findLongestWordLength(str) {
   let splitStr = str.split(" ");
   let mapStr = splitStr.map((word) => word.length);
   let reducedStr = mapStr.reduce((longestLength, wordLength) => {
      if (wordLength > longestLength) {
         return wordLength;
      } else {
         return longestLength;
      }
   }, 0);
   console.log(reducedStr);
   return reducedStr;
}

// Return Largest Numbers in Arrays

function largestOfFour(arr) {
   var array = [];
   for (let i in arr) {
      var firstReduce = arr[i].reduce((largestNum, num) => {
         if (largestNum < num || largestNum === null) {
            return num;
         } else {
            return largestNum;
         }
      }, null);
      console.log(firstReduce);
      array.push(firstReduce);
   }
   return array;
}

// Confirm the Ending Letter

function confirmEndingLetter(string, letter) {
   let lastLetter = string[string.length - 1];
   if (lastLetter === letter) {
      return true;
   } else {
      return false;
   }
}

// Confirm the Ending Target

function confirmEndingTarget(string, target) {
   let targetLength = target.length;
   let targetMatch = string.slice(string.length - targetLength, string.length);
   if (targetMatch === target) {
      return true;
   } else {
      return false;
   }
}

// Repeat a String Repeat a String
function repeatStringNumTimes(string, num) {
   let result = " ";

   for (let i = 0; i < num; i++) {
      result += string;
   }
   return result;
}

// Truncate a String
// Finders Keepers
// Boo who
// Title Case a Sentence
// Slice and Splice
// Falsy Bouncer
// Where do I Belong
// Mutations
// Chunky Monkey
