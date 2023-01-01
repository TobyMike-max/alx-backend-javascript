export default function returnHowManyArguments(...args) {
  const arr = [];
  for (const arg of args) {
    arr.push(arg);
  }
  return arr.length;
}
