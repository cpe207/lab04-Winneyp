function primeNumber(a) {
  if (a === 1) {
    return "YES";
  } else if (a === 2) {
    return "YES";
  }
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return "NO";
    } else {
      return "YES";
    }
  }
}
const a1 = 10;
const a2 = 29;
const a3 = 2;

console.log(primeNumber(a1));
console.log(primeNumber(a2));
console.log(primeNumber(a3));

module.exports = primeNumber;
