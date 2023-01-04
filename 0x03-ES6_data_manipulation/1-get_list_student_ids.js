export default function getListStudentIds(arr) {
  if (arr && Array.isArray(arr)) {
    return arr.map(({ id }) => id);
  } else return [];
}
