const expect = chai.expect;
const should = chai.should();

function findLargestPrimeFactor(number) {
    let composite = number;
    let divideNum = 2;
    while (number > 1) {
      if (number % divideNum === 0) {
        number /= divideNum;
      } else {
        divideNum++;
      }
    }
    return divideNum;
}

function largestPalindrome() {
  let value = 0;
  let reverseVal = ''
  let finalVal = 0;
  for (i = 999; i >= 100; i--) {
    for (j = 999; j >= 100; j--) {
      value = i * j;
      reverseVal = String(value).split("").reverse().join("");
      if (reverseVal === String(value) && value > finalVal) {
        finalVal =  value;
      }
    }
  }
  return finalVal;
}





describe("Uncomment Test", function() {
    it("should find the largest prime factor of a composite number", function () {
        findLargestPrimeFactor(20).should.equal(5);
        findLargestPrimeFactor(35).should.equal(7);
        findLargestPrimeFactor(55).should.equal(11);
      })

    it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
      largestPalindrome().should.equal(906609);
    })
    
    
    it("should find the smallest number divisible by each of the numbers 1 to 20", function(number) {
      // type 20 into the function parameter "number" and it will do!//
      function checkPrime (num) {
        let sqrt = parseInt(Math.sqrt(num));
    
        if (num === 2) {
          return true;
        }
    
        if (num % 2 === 0) {
          return false;
        }
    
        for (let i = 3; i <= sqrt; i += 2) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      }
      let before = 2;
      for (let i = 3; i <= number; i++) {
        
        if (checkPrime(i)) {
          before = before * i;
        } else if(before % i !== 0) {
          let value1 = before;
          let value2 = i;
          while(value2 !== 0) {
            let r = value1 % value2;
            value1 = value2;
            value2 = r;
          }
          before = before * i / value1;
          }
        }
        return before;
      }
      //it will return 232,792,560!!//
    );
    
    it("should find the difference between the sum of the squares and the square of the sums", function (number) {
      // let finalNum = ((3 * number**2 + 2 * number) * (1 - number**2) / 12)
      let squaredArray = [];
      let sumOfNums = 0;
      for (i = 1; i <= number; i++) {
        squaredArray.push(i * i);
        sumOfNums += i
      }
      let sumOfSquares = squaredArray.reduce((arr, curr) => {
        return arr + curr;
      }, 0);
      let squareOfSums = sumOfNums ** 2;
      return Math.abs(sumOfSquares - squareOfSums);
    });
    
    it("should find the 10001st prime", function (number) {
      let primeArray = [];
      function checkPrime (num) {
        let sqrt = parseInt(Math.sqrt(num));
    
        if (num === 2) {
          return true;
        }
    
        if (num % 2 === 0) {
          return false;
        }
    
        for (let i = 3; i <= sqrt; i += 2) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      }
      let inputVal = 0;
      while(primeArray.length <= number) {
        if (checkPrime(inputVal)) {
          primeArray.push(inputVal);
        }
        inputVal++
      }
      return primeArray[number - 1]
    });
})
