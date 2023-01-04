const getStudentIdsSum = (arr) => arr.reduce((acc, { id }) => id + acc, 0);
export default getStudentIdsSum;
