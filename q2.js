function arrayStringify(a) {
  let lengtha = a.length;
  let text = ``;
  for (let i = 0; i < lengtha; i++) {
    let b = a[i] + ``;
    text = text + b;
  }
  return text;
}

const a1 = [1, 2, 3];
const a2 = [10, 9, 8, 7, 6, 5];
const a3 = [];

console.log(arrayStringify(a1));
console.log(arrayStringify(a2));
console.log(arrayStringify(a3));

module.exports = arrayStringify;
