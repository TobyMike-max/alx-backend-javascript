export default function getListStudentIds(arr) {
  return (arr && Array.isArray(arr)) ? arr.map(({ id }) => id) : [];
}
