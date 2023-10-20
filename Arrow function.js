//1.Print odd numbers in an array


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.forEach(number => {
  if (number % 2 !== 0) {
    console.log(number);
  }
});



//2.Convert all the strings to title caps in a string array


const stringArray = ["this is a test", "hello world", "javascript"];

const titleCaseArray = stringArray.map(str => {
  return str
    .split(" ")
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
});

console.log(titleCaseArray);


//3.Sum of all numbers in an array

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);





//4.Return all the prime numbers in an array


const numbers = [2, 3, 5, 7, 8, 11, 12, 13, 17];

const isPrime = num => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const primeNumbers = numbers.filter(num => isPrime(num));

console.log(primeNumbers);



//5.Return all the palindromes in an array

const words = ["racecar", "hello", "level", "world", "deified"];

const isPalindrome = word => {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
};

const palindromeWords = words.filter(word => isPalindrome(word));

console.log(palindromeWords);
