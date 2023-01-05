const cleanSet = (set, str) => {
  if (!str || !str.length) return '';
  let value = '';
  for (const val of set) {
    if (val && val.startsWith(str)) {
      value += value.length === 0 ? val.replace(str, '') : val.replace(str, '-');
    }
  }
  return value;
};
export default cleanSet;
