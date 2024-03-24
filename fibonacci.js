function isFibo(num) {
  let a = 0;
  let b = 1;

  while (a <= num) {
    if (a === num) {
      return `O número ${num} pertence a sequencia`
    }

    let temp = a;
    a = b;
    b = temp + a;
  }

  return `O número ${num} não pertence a sequencia`
}

const testNumberFour = isFibo(4)
console.log(testNumberFour)

const testNumberTwentyOne = isFibo(21)
console.log(testNumberTwentyOne)