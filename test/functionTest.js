const expect = chai.expect;
const should = chai.should();

// 되도록이면 should로 테스트를 진행해주시기 바랍니다. 이상하게 expect가 잘 안 먹히는 경우가 있습니다 ㅠㅠ
// 제가 푼 정답과 test 내용이 궁금하면 solution.js 파일을 참조해주세요.(참고로 저도 틀렸을 수 있으니 이점 양해 바래요 ㅠㅠ)

const findLargestPrimeFactor = (number) => {
  //1번 문제 함수명입니다. 1번 문제의 조건대로 함수를 작성하고, 밑에서 테스트 해보세요!
 
}

function largestPalindrome() {
  //2번 문제 함수명입니다. 1번 문제의 조건대로 함수를 작성하고, 밑에서 테스트 해보세요!

}

function leastCommonMultiple(number) {
  //3번 문제 함수명입니다. 1번 문제의 조건대로 함수를 작성하고, 밑에서 테스트 해보세요!

}

function sumSquare(number) {
  //4번 문제 함수명입니다. 1번 문제의 조건대로 함수를 작성하고, 밑에서 테스트 해보세요!

};

function findTenThousandOnePrime (number) {
  //5번 문제 함수명입니다. 1번 문제의 조건대로 함수를 작성하고, 밑에서 테스트 해보세요!

}


describe("Uncomment Test", function() {
  
  // 1번 문제
  it("should find the largest prime factor of a composite number", function () {
    // 38번 라인과 같이 function을 생성하고 그 function이 올바른 값을 리턴하는지 확인하시면 됩니다.
    // (주석을 삭제해보고 testrunner.html을 확인해주세요)
    // findLargestPrimeFactor(20).should.equal(5);
    throw new Error;  //it을 작성할 때부터는 throw new Error를 지워주시면 됩니다.
  })

  // 2번 문제 : 3자릿 수 두 개를 곱하여 가장 큰 Palindrome 값은 906609입니다.
  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    throw new Error; //it을 작성할 때부터는 throw new Error를 지워주시면 됩니다.
  })
  
  // 3번 문제 : 최소공배수를 구하는 문제입니다.  20을 입력받았을 때 232792560 값이 리턴되어야 합니다.
  it("should find the smallest number divisible by each of the numbers 1 to 20", function() {
    throw new Error; //it을 작성할 때부터는 throw new Error를 지워주시면 됩니다.
  });
  
  // 4번 문제 : 20이라는 값을 함수가 인자값으로 받았을 때 41230을 리턴해야 합니다
  it("should find the difference between the sum of the squares and the square of the sums", function () {
    throw new Error; //it을 작성할 때부터는 throw new Error를 지워주시면 됩니다.
  });
  
  // 5번 문제 : 10000번째 Prime Number는 104723입니다. 10001번째는 무엇일까요?
  it("should find the 10001st prime", function () {
    throw new Error; //it을 작성할 때부터는 throw new Error를 지워주시면 됩니다.
  });
})

