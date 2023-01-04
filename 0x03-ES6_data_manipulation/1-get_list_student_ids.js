export default function getListStudentIds(arr) {
  if (arr && Array.isArray(arr)) {
    return arr.map((obj) => obj.id);
  } else return [];
}
