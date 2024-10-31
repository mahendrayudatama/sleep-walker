/**
 * @typedef {Object} User
 * @property {string} name
 * @property {number} age
 * @property {boolean} isMarried
 * @property {number} score
 */
let user = {
  name: "Yuda",
  age: 21,
  isMarried: true,
  score: 90,
};

/**
 * A = 90 -100
 * B = 80 - 89
 * C = 70 - 79
 * D = 60 - 69
 * E = 50 - 59
 * F = < 50
 * @param {number} score
 * @returns {string}
 */

function getGrade(score) {
  let grade = "F";
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
  } else if (score >= 50 && score <= 59) {
    grade = "E";
  }
  return grade;
}

let input = [80, 30, 60, 55, 32, 60, 10, 65, 90, 12];
let search = 100;
let output = [90, 10];

function searchScore(input, search) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === search) {
        output.push(input[i], input[j]);
      }
    }
  }
  return output;
}

console.log(searchScore(input, search));
