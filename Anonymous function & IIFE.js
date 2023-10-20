
//Anonymous function & IIFE

//1.Print odd numbers in an array

// Using an anonymous function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(num) {
  if (num % 2 !== 0) {
    console.log(num);
  }
});

// Using an IIFE

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      console.log(numbers[i]);
    }
  }
})();


//2.Convert all the strings to title caps in a string array

// Using an anonymous function

var stringArray = ["Day 3", "Task", "javascript"];

var titleCaseArray = stringArray.map(function (str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
});

console.log(titleCaseArray);


// Using an IIFE

var stringArray = ["Day 3", "Task", "javascript"];

var titleCaseArray = (function (arr) {
  return arr.map(function (str) {
    return str
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
})(stringArray);

console.log(titleCaseArray);



//3.Sum of all numbers in an array


// Using an anonymous function

var numbers = [1, 2, 3, 4, 5];

var sum = function (arr) {
  return arr.reduce(function (acc, current) {
    return acc + current;
  }, 0);
}(numbers);

console.log(sum);

 
 // Using an IIFE
 
var numbers = [1, 2, 3, 4, 5];

var sum = (function (arr) {
  return arr.reduce(function (acc, current) {
    return acc + current;
  }, 0);
})(numbers);

console.log(sum);



//4.Return all the prime numbers in an array


// Using an anonymous function
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

var primeNumbers = function (arr) {
  return arr.filter(function (num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (var i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  });
}(numbers);

console.log(primeNumbers);




// Using an IIFE


var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

var primeNumbers = (function (arr) {
  return arr.filter(function (num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (var i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  });
})(numbers);

console.log(primeNumbers);


//5.Return all the palindromes in an array


// Using an anonymous function

var words = ["Ninja", "Car", "JCB", "Mini Cooper", "Duke 790"];

var palindromes = function (arr) {
  return arr.filter(function (word) {
    var reversed = word.split("").reverse().join("");
    return word === reversed;
  });
}(words);

console.log(palindromes);



// Using an IIFE

var words = ["Ninja", "Car", "JCB", "Mini Cooper", "Duke 790"];

var palindromes = (function (arr) {
  return arr.filter(function (word) {
    var reversed = word.split("").reverse().join("");
    return word === reversed;
  });
})(words);

console.log(palindromes);



//6.Return median of two sorted arrays of the same size.

// Using an anonymous function

var array1 = [1, 3, 8, 9];
var array2 = [2, 4, 7, 10];

var findMedian = function (arr1, arr2) {
  var merged = arr1.concat(arr2);
  var sorted = merged.sort(function (a, b) {
    return a - b;
  });
  var length = sorted.length;
  
  if (length % 2 === 0) {
    
    var mid1 = sorted[length / 2 - 1];
    var mid2 = sorted[length / 2];
    return (mid1 + mid2) / 2;
  } else {
   
    return sorted[Math.floor(length / 2)];
  }
}(array1, array2);

console.log(findMedian);



// Using an IIFE

var array1 = [1, 3, 8, 9];
var array2 = [2, 4, 7, 10];

var findMedian = function (arr1, arr2) {
  var merged = arr1.concat(arr2);
  var sorted = merged.sort(function (a, b) {
    return a - b;
  });
  var length = sorted.length;
  
  if (length % 2 === 0) {
   
    var mid1 = sorted[length / 2 - 1];
    var mid2 = sorted[length / 2];
    return (mid1 + mid2) / 2;
  } else {
    
    return sorted[Math.floor(length / 2)];
  }
}(array1, array2);

console.log(findMedian);



//7.Remove duplicates from an array

// Using an anonymous function

var array = [1, 2, 2, 3, 4, 4, 5, 6, 6];

var uniqueArray = function (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}(array);

console.log(uniqueArray);


// Using an IIFE

var array = [1, 2, 2, 3, 4, 4, 5, 6, 6];

var uniqueArray = (function (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
})(array);

console.log(uniqueArray);




//8.Rotate an array by k times

// Using an anonymous function


var array = [1, 2, 3, 4, 5];
var k = 2;

var rotateArray = function (arr, rotations) {
  for (var i = 0; i < rotations; i++) {
    var temp = arr.shift();
    arr.push(temp);
  }
  return arr;
}(array, k);

console.log(rotateArray);

// Using an IIFE

var array = [1, 2, 3, 4, 5];
var k = 2;

var rotateArray = (function (arr, rotations) {
  for (var i = 0; i < rotations; i++) {
    var temp = arr.shift();
    arr.push(temp);
  }
  return arr;
})(array, k);

console.log(rotateArray);

