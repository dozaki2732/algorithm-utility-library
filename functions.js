//converting celsius to fahrenheit
function convertCtoF(celsius) {
   // create var that multiplies then adds to the input
   let fahrenheit = celsius * (9 / 5) + 32;
   return fahrenheit;
}

// Reverse a String
function reverseString(str) {
   //split at every single character into an array, reverse the array , then joins it back
   let result = str.split("").reverse().join("");
   return result;
}

// Factorialize a Number
function factorializeNumber(num) {
   let result = 1;
   // starting result cannot be 0, multiplying by 1 is pointless
   for (let multiplyBy = num; multiplyBy > 1; multiplyBy--) {
      // result = result*multiplyBy
      result *= multiplyBy;
   }
   return result;
}

// Find the Longest Word in a String
function findLongestWordLength(str) {
   let splitStr = str.split(" "); // split the string into array of words
   let mapStr = splitStr.map((word) => word.length); // return array of word lengths

   //do a function on an entire array, reduce it to a single value
   // the value should be the longest word
   let reducedStr = mapStr.reduce((longestLength, wordLength) => {
      if (wordLength > longestLength) {
         return wordLength;
      } else {
         return longestLength;
      }
   }, 0); //initial value
   console.log(reducedStr);
   return reducedStr; //return the reduced value of the longest word
}

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
   var array = [];
   for (let i in arr) {
      // (let i in arr) = (let i = 0; i < arr.length; i++)
      var firstReduce = arr[i].reduce((largestNum, num) => {
         // finding the largest # in the sub array
         if (largestNum < num || largestNum === null) {
            //used null to start to account for negative numbers
            return num;
         } else {
            //return num if it is larger, if not, it will return the largestNum
            return largestNum;
         }
      }, null); //null is a place holder so the first iteration will make largestNum == num
      console.log(firstReduce);
      array.push(firstReduce); //push to the empty array
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

   //slicing then comparing same quantity of characters from string to target
   let targetMatch = string.slice(string.length - targetLength, string.length);
   if (targetMatch === target) {
      //comparing the sliced piece to target
      return true;
   } else {
      return false;
   }
}

// Repeat a String Repeat a String
function repeatStringNumTimes(string, repetitions) {
   let result = "";

   for (let repetitionNum = 0; repetitionNum < repetitions; repetitionNum++) {
      result += string; // result = result + string
      if (repetitionNum < repetitions - 1) {
         //makes sure not to add space after the last repetition
         result += " ";
      }
   }
   console.log(result);
   return result;
}

// Truncate a String
function truncateString(string, length) {
   if (length >= string.length) {
      return string;
   } else {
      let trunString = string.slice(0, length) + "...";
      return trunString;
   }
}

// // Finders Keepers
function findersKeepers(array, funct = (num) => num % 2 === 0) {
   let newArray = array.filter(funct);
   return newArray[0];
}

// Boo who
function booHoo(boolean) {
   return boolean === true || boolean === false;
}

// Title Case a Sentence
function titleCase(string) {
   let newString = string

      .toLowerCase()
      .split(" ")
      .map(function (letters) {
         let conversion = letters[0].toUpperCase() + letters.slice(1);
         return conversion;
      });
   return newString.join(" ");
}

// Slice and Splice
function sliceAndSplice(arr1, arr2, n) {
   let newArray = [];
   newArray.push(...arr2.slice(0, n));
   newArray.push(...arr1);
   newArray.push(...arr2.slice(n, arr2.length));
   return newArray;
}

// Falsy Bouncer
function falsyBouncer(array) {
   let result = array.filter(Boolean);
   return result;
}

// Where do I Belong
function whereDoIBelong(array, num) {
   let sortedArray = array.sort((a, b) => a - b);
   console.log(sortedArray);
   for (let i = 0; i < sortedArray.length; i++) {
      if (num <= sortedArray[i]) {
         var lowestIndex = i;
         return lowestIndex;
      }
   }
   return sortedArray.length;
}

// Mutations
function mutations(array) {}
// Chunky Monkey
