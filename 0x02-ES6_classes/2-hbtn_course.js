export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('students must be an Array');
    students.forEach((std) => {
      if (typeof std !== 'string') throw TypeError('student must be a String');
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }
  get name() {
    return this._name;
  }

  set length(newLen) {
    if (typeof newLen !== 'number') throw TypeError('Length must be a number');
    this._length = newLen;
  }
  get length() {
    return this._length;
  }

  set students(newStud) {
    if (!Array.isArray(newStud)) throw TypeError('Students must be an Array');
    students.forEach((std) => {
      if (typeof std !== 'string') throw TypeError('Student must be a string');
    });
    this._students = newStud;
  }
  get students() {
    return this._students;
  }
}
