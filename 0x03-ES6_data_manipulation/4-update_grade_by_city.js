export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter(({ location }) => location === city).map((item) => {
    const filRec = { ...item };
    const newRec = newGrades.find((stud) => stud.studentId === item.id);
    if (newRec) filRec.grade = newRec.grade;
    else filRec.grade = 'N/A';
    return filRec;
  });
}
