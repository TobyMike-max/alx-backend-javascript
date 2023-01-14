interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const stud1: Student = {
	firstName: 'Java',
	lastName: 'Script',
	age: 10,
	location: 'Toronto',
};

const stud2: Student = {
	firstName: 'Type',
	lastName: 'Script',
	age: 6,
	location: 'Canada',
};

const studentsList = [stud1, stud2];
