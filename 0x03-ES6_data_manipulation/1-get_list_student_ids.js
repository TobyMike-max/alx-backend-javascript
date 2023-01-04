export default function getListStudentIds(arr) {
  (arr && Array.isArray(arr)) ? return arr.map((obj) => obj.id) : return [];
}
