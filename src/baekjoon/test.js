const fs = require("fs");
const { get } = require("http");
const { moveCursor } = require("readline");
const input = fs.readFileSync("src/baekjoon/input.txt").toString().split("\n");

// for (let i = 0; i < input.length; i++) {
//   const num1 = Number(input[0]);
//   console.log(num1);
// }

let ans = [];

function getTempPos(startPos, desPos) {
  const positions = [1, 2, 3];
  for (i of positions) {
    if (i !== startPos && i !== desPos) {
      return i;
    }
  }
}

function movePlates(startPos, desPos, numOfPlates) {
  if (numOfPlates === 1) {
    ans.push(`${startPos} ${desPos}`);
    return;
  }
  if (numOfPlates <= 0) {
    return;
  }
  if (numOfPlates % 2 == 0) {
    movePlates(startPos, getTempPos(startPos, desPos), numOfPlates - 1);
    movePlates(startPos, desPos, 1);
    return movePlates(getTempPos(startPos, desPos), desPos, numOfPlates - 1);
  } else {
    movePlates(startPos, desPos, numOfPlates - 1);
    movePlates(startPos, getTempPos(startPos, desPos), 1);
    return movePlates(desPos, getTempPos(startPos, desPos), numOfPlates - 1);
  }
}

movePlates(1, 2, input[0]);
console.log(ans.length);
for (let i of ans) {
  console.log(i);
}
