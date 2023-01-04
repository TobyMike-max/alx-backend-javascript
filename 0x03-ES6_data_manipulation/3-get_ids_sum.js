export default function getStudentIdsSum(arr) {
	return arr.reduce((acc, { id }) => id + acc, 0);
}
