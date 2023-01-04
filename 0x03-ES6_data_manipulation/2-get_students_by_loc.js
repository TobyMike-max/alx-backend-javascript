export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)) {
    return arr.filter(({ location }) => location === city);
  } else return [];
}
