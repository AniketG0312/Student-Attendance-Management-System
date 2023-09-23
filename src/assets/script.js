let students = JSON.parse(localStorage.getItem('students')) || [];
let dates = JSON.parse(localStorage.getItem('dates')) || [];

function saveData() {
    localStorage.setItem('students', JSON.stringify(students));
    localStorage.setItem('dates', JSON.stringify(dates));
}

function addStudent() {
    const studentName = document.getElementById("studentName").value;
    if (studentName.trim() !== "") {
        const newStudent = { id: students.length + 1, name: studentName, attendance: Array(dates.length).fill(false) };
        students.push(newStudent);
        generateAttendanceTable();
        saveData();
        document.getElementById("studentName").value = "";
    }
}

function deleteStudent(studentId) {
    students = students.filter(student => student.id !== studentId);
    generateAttendanceTable();
    saveData();
}

function addDate() {
    const attendanceDate = document.getElementById("attendanceDate").value;
    if (attendanceDate.trim() !== "") {
        dates.push(attendanceDate);
        students.forEach(student => {
            student.attendance.push(false); // Add attendance status for the new date
        });
        generateAttendanceTable();
        saveData();
        document.getElementById("attendanceDate").value = "";
    }
}

function deleteDate() {
    const dateToDelete = document.getElementById("dateToDelete").value;
    if (dateToDelete) {
        dates = dates.filter(date => date !== dateToDelete);
        students.forEach(student => {
            student.attendance.splice(dates.indexOf(dateToDelete), 1); // Remove attendance status for the deleted date
        });
        generateAttendanceTable();
        saveData();
    }
}

function generateAttendanceTable() {
    let tableHTML = "<table><tr><th>ID</th><th>Name</th>";

    dates.forEach(date => {
        tableHTML += `<th>${date}</th>`;
    });

    tableHTML += "<th>Action</th></tr>";

    students.forEach(student => {
        tableHTML += `<tr><td>${student.id}</td><td>${student.name}</td>`;

        student.attendance.forEach((status, index) => {
            tableHTML += `<td><input type="checkbox" id="day-${index + 1}-student-${student.id}" onclick="updateAttendance(${index + 1},${student.id})" ${status ? 'checked' : ''}></td>`;
        });

        tableHTML += `<td><button onclick="deleteStudent(${student.id})">Delete</button></td></tr>`;
    });

    tableHTML += "</table>";

    // Populate date options for deletion
    let dateOptions = "<option value=''>Select Date to Delete</option>";
    dates.forEach(date => {
        dateOptions += `<option value='${date}'>${date}</option>`;
    });
    document.getElementById("dateToDelete").innerHTML = dateOptions;

    document.getElementById("attendanceTable").innerHTML = tableHTML;
}

function updateAttendance(day, studentId) {
    const checkbox = document.getElementById(`day-${day}-student-${studentId}`);
    const student = students.find(student => student.id === studentId);

    if (checkbox.checked) {
        student.attendance[day - 1] = true;
    } else {
        student.attendance[day - 1] = false;
    }

    saveData();
}

function calculateAttendance() {
    let totalDays = dates.length;

    let tableHTML = "<table><tr><th>ID</th><th>Name</th><th>Percentage</th><th>Status</th></tr>";

    students.forEach(student => {
        let presentCount = student.attendance.filter(status => status === true).length;
        let percentage = (presentCount / totalDays) * 100;

        let statusText, statusColor;

        if (percentage >= 75) {
            statusText = "Great";
            statusColor = "green";
        } else {
            statusText = "Do classes regularly";
            statusColor = "red";
        }

        tableHTML += `<tr style="color: ${statusColor}"><td>${student.id}</td><td>${student.name}</td><td>${percentage.toFixed(2)}%</td><td>${statusText}</td></tr>`;
    });

    tableHTML += "</table>";
    document.getElementById("attendanceStatus").innerHTML = tableHTML;
}    

function generateAttendance() {
    const startDate = document.getElementById("generateStartDate").value;
    const endDate = document.getElementById("generateEndDate").value;

    if (startDate.trim() !== "" && endDate.trim() !== "") {
        const startTimestamp = new Date(startDate).getTime();
        const endTimestamp = new Date(endDate).getTime();

        if (startTimestamp <= endTimestamp) {
            const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
            const totalDays = Math.round(Math.abs((endTimestamp - startTimestamp) / oneDay)) + 1;

            let generatedTableHTML = "<h2>Generated Attendance</h2><table><tr><th>ID</th><th>Name</th><th>Percentage</th><th>Status</th>";

            students.forEach(student => {
                generatedTableHTML += `<tr><td>${student.id}</td><td>${student.name}</td>`;

                let presentCount = 0;

                for (let i = startTimestamp; i <= endTimestamp; i += oneDay) {
                    const currentDate = new Date(i);
                    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
                    const attendanceIndex = dates.indexOf(formattedDate);
                    if (attendanceIndex !== -1) {
                        const status = student.attendance[attendanceIndex];
                        if (status) {
                            presentCount++;
                        }
                    }
                }

                let percentage = (presentCount / totalDays) * 100;

                let statusText, statusColor;

                if (percentage >= 75) {
                    statusText = "Great";
                    statusColor = "green";
                } else {
                    statusText = "Do classes regularly";
                    statusColor = "red";
                }

                generatedTableHTML += `<td>${percentage.toFixed(2)}%</td><td style="color: ${statusColor}">${statusText}</td></tr>`;
            });

            generatedTableHTML += "</table>";

            document.getElementById("generatedAttendanceTable").innerHTML = generatedTableHTML;
        } else {
            alert("End Date must be equal to or later than Start Date.");
        }
    } else {
        alert("Please select both Start Date and End Date.");
    }
}


generateAttendanceTable();
