const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of (10 - 'loop index') to the array 'simpleOne'
//    eg [1,2,...]

// HINT: Loop needs to be changed
for (let i = 1; i <= 10; i++) {
  simpleOne.push(i)
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = 1; i < 11; i++) {
  const innerOne = []
  for (let j = i; j < i * 2; j++) {
    innerOne.push(i)
  }
  nestedOne.push(innerOne)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

for (let i = 1; i < 11; i++) {
  const innerTwo = []
  for (let j = i; j > 0; j--) {
    innerTwo.push(j)
  }
  nestedTwo.push(innerTwo)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]

for (let i = 1; i < 11; i++) {
  const middleOne = []
  for (let j = 0; j < i; j++) {
    const innerOne = []
    for (let k = -1; k < j; k++) {
      innerOne.push(i)
    }
    middleOne.push(innerOne)
  }
  deepOne.push(middleOne)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

for (let i = 1; i < 11; i++) {
  const middleOne = []
  for (let j = 0; j < i; j++) {
    const innerOne = []
    for (let k = 1; k < j + 2; k++) {
      innerOne.push(k)
    }
    middleOne.push(innerOne)
  }
  deepTwo.push(middleOne)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = 1; i <= 10; i++) {
  const deepArr1 = []
  for (let j = 0; i > j; j++) {
    const deepArr2 = []
    for (let k = 1; j + 2 > k; k++) {
      deepArr2.push(k)
    }
    let result = 0
    for (let m = 0; m < deepArr2.length; m++) {
      result += deepArr2[m] ** 2
    }
    result /= deepArr2.length
    deepArr1.push([result])
  }
  deepThree.push(deepArr1)
}

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
