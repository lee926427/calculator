const operator = {
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};
const isSub = (value) => /\-/.test(value);
const isNumber = (value) => /\d+/.test(value);
const isMultOrDivd = (value) => /[\*\/]/.test(value);
const matchBy = (regx) => (str) => str.match(regx);
const groupByOperation = matchBy(/(\d+|[\+\-\*\/])/g);

export function calculate(s) {
  const arr = groupByOperation(s);
  const numStack = [];

  for (let i = 0; i < arr.length; i++) {
    if (isNumber(arr[i])) {
      console.log(arr[i]);
      if (isSub(arr[i - 1])) numStack.push(+arr[i] * -1);
      else numStack.push(+arr[i]);
    } else if (isMultOrDivd(arr[i])) {
      const a = numStack.pop();
      const b = +arr[i + 1];

      numStack.push(operator[arr[i++]](a, b));
    }
  }

  while (numStack.length > 1) {
    const a = numStack.pop();
    const b = numStack.pop();
    numStack.push(a + b);
  }

  return numStack.pop();
}
