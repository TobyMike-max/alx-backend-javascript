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

const studentsList: Student[] = [stud1, stud2];

function renderTable() {
	const table = document.createElement('table');

	const headers = ['First Name', 'Location'];
	const headerRow = table.insertRow();
	headers.forEach((header) => {
		const th = document.createElement('th');
		th.textContent = header;
		headerRow.appendChild(th);
	});

	studentsList.forEach((student) => {
		const row = table.insertRow();
		const cell1 = row.insertCell();
		const cell2 = row.insertCell();
		cell1.textContent = student.firstName;
		cell2.textContent = student.location;
	});

	document.body.appendChild(table);
}

window.addEventListener('DOMContentLoaded', renderTable);



