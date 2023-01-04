export default function getListStudentIds(arr) {
  if (arr && Array.isArray(arr)) {
    arr.map(({ id }) => id);
  } else return [];
}
