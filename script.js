function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboardPage").style.display = "block";
        updateDashboardStats();

    } else {

        document.getElementById("loginMessage").innerHTML =
            "Invalid username or password";
    }
}


function logout() {

    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("studentPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}


function showMessage(moduleName) {

    document.getElementById("dashboardMessage").innerHTML =
        moduleName + " module will be developed next.";
}


function showStudentDetails() {

    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("studentPage").style.display = "block";

    displayStudents();
}


function backToDashboard() {

    document.getElementById("studentPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "block";
}


function addStudent() {

    let id = document.getElementById("studentId").value;
    let name = document.getElementById("studentName").value;
    let branch = document.getElementById("branch").value;
    let year = document.getElementById("year").value;
    let section = document.getElementById("section").value;


    if (id === "" || name === "" || branch === "" ||
        year === "" || section === "") {

        document.getElementById("studentMessage").innerHTML =
            "Please fill all fields.";

        return;
    }


    // Get existing students
    let students = JSON.parse(localStorage.getItem("students")) || [];


    // Create new student
    let student = {
        id: id,
        name: name,
        branch: branch,
        year: year,
        section: section
    };


    // Add student
    students.push(student);


    // Save students permanently
    localStorage.setItem("students", JSON.stringify(students));


    document.getElementById("studentMessage").innerHTML =
        "Student saved successfully!";


    // Clear input fields
    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("year").value = "";
    document.getElementById("section").value = "";


    // Display updated list
    displayStudents();
}


function displayStudents() {

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let table = document.getElementById("studentTable");


    // Keep only the heading row
    table.innerHTML = `
        <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Section</th>
        </tr>
    `;


    // Display students
    students.forEach(function(student) {

        let row = table.insertRow();

        row.insertCell(0).innerHTML = student.id;
        row.insertCell(1).innerHTML = student.name;
        row.insertCell(2).innerHTML = student.branch;
        row.insertCell(3).innerHTML = student.year;
        row.insertCell(4).innerHTML = student.section;

    });
}
function showExamDetails() {
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("studentPage").style.display = "none";
    document.getElementById("examPage").style.display = "block";

    displayExams();
}


function backToDashboardFromExam() {
    document.getElementById("examPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "block";
}


function addExam() {

    let id = document.getElementById("examId").value;
    let subject = document.getElementById("examSubject").value;
    let date = document.getElementById("examDate").value;
    let time = document.getElementById("examTime").value;
    let duration = document.getElementById("examDuration").value;

    if (id === "" || subject === "" || date === "" ||
        time === "" || duration === "") {

        document.getElementById("examMessage").innerHTML =
            "Please fill all fields.";

        return;
    }

    let exams = JSON.parse(localStorage.getItem("exams")) || [];

    let exam = {
        id: id,
        subject: subject,
        date: date,
        time: time,
        duration: duration
    };

    exams.push(exam);

    localStorage.setItem("exams", JSON.stringify(exams));

    document.getElementById("examMessage").innerHTML =
        "Exam saved successfully!";

    document.getElementById("examId").value = "";
    document.getElementById("examSubject").value = "";
    document.getElementById("examDate").value = "";
    document.getElementById("examTime").value = "";
    document.getElementById("examDuration").value = "";

    displayExams();
}


function displayExams() {

    let exams = JSON.parse(localStorage.getItem("exams")) || [];

    let table = document.getElementById("examTable");

    table.innerHTML = `
        <tr>
            <th>Exam ID</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Duration</th>
        </tr>
    `;

    exams.forEach(function(exam) {

        let row = table.insertRow();

        row.insertCell(0).innerHTML = exam.id;
        row.insertCell(1).innerHTML = exam.subject;
        row.insertCell(2).innerHTML = exam.date;
        row.insertCell(3).innerHTML = exam.time;
        row.insertCell(4).innerHTML = exam.duration;
    });
}
function showRoomDetails() {
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("roomPage").style.display = "block";

    displayRooms();
}

function backToDashboardFromRoom() {
    document.getElementById("roomPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "block";
}

function addRoom() {

    let roomNumber = document.getElementById("roomNumber").value;
    let buildingName = document.getElementById("buildingName").value;
    let roomCapacity = document.getElementById("roomCapacity").value;

    if (roomNumber === "" || buildingName === "" || roomCapacity === "") {
        document.getElementById("roomMessage").innerHTML =
            "Please fill all fields.";
        return;
    }

    let rooms = JSON.parse(localStorage.getItem("rooms")) || [];

    let room = {
        roomNumber: roomNumber,
        buildingName: buildingName,
        roomCapacity: roomCapacity
    };

    rooms.push(room);

    localStorage.setItem("rooms", JSON.stringify(rooms));

    document.getElementById("roomMessage").innerHTML =
        "Room saved successfully!";

    document.getElementById("roomNumber").value = "";
    document.getElementById("buildingName").value = "";
    document.getElementById("roomCapacity").value = "";

    displayRooms();
}

function displayRooms() {

    let rooms = JSON.parse(localStorage.getItem("rooms")) || [];

    let table = document.getElementById("roomTable");

    table.innerHTML = `
        <tr>
            <th>Room Number</th>
            <th>Building</th>
            <th>Capacity</th>
        </tr>
    `;

    rooms.forEach(function(room) {

        let row = table.insertRow();

        row.insertCell(0).innerHTML = room.roomNumber;
        row.insertCell(1).innerHTML = room.buildingName;
        row.insertCell(2).innerHTML = room.roomCapacity;

    });
}
function showGenerateSeating() {
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("generatePage").style.display = "block";

    document.getElementById("generateMessage").innerHTML = "";
}

function backToDashboardFromGenerate() {
    document.getElementById("generatePage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "block";
}

function generateSeating() {

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let rooms = JSON.parse(localStorage.getItem("rooms")) || [];

    if (students.length === 0) {
        document.getElementById("generateMessage").innerHTML =
            "Please add students first.";
        return;
    }

    if (rooms.length === 0) {
        document.getElementById("generateMessage").innerHTML =
            "Please add rooms first.";
        return;
    }

    let seating = [];
    let studentIndex = 0;

    for (let room of rooms) {

        let capacity = Number(room.roomCapacity);

        for (let seat = 1; seat <= capacity; seat++) {

            if (studentIndex >= students.length) {
                break;
            }

            seating.push({
                studentId: students[studentIndex].id,
                studentName: students[studentIndex].name,
                roomNumber: room.roomNumber,
                seatNumber: seat
            });

            studentIndex++;
        }

        if (studentIndex >= students.length) {
            break;
        }
    }

    if (studentIndex < students.length) {
        document.getElementById("generateMessage").innerHTML =
            "Not enough room capacity for all students.";
        return;
    }

    localStorage.setItem("seating", JSON.stringify(seating));

    document.getElementById("generateMessage").innerHTML =
        "Seating arrangement generated successfully!";
}
function showViewSeating() {
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("viewPage").style.display = "block";

    displaySeating();
}

function backToDashboardFromView() {
    document.getElementById("viewPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "block";
}

function displaySeating() {

    let seating = JSON.parse(localStorage.getItem("seating")) || [];

    let table = document.getElementById("seatingTable");

    table.innerHTML = `
        <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Room Number</th>
            <th>Seat Number</th>
        </tr>
    `;

    if (seating.length === 0) {
        document.getElementById("viewMessage").innerHTML =
            "No seating arrangement found. Please generate seating first.";
        return;
    }

    document.getElementById("viewMessage").innerHTML =
        "Seating arrangement displayed successfully!";

    seating.forEach(function(student) {

        let row = table.insertRow();

        row.insertCell(0).innerHTML = student.studentId;
        row.insertCell(1).innerHTML = student.studentName;
        row.insertCell(2).innerHTML = student.roomNumber;
        row.insertCell(3).innerHTML = student.seatNumber;

    });
}
function updateDashboardStats() {

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let exams = JSON.parse(localStorage.getItem("exams")) || [];
    let rooms = JSON.parse(localStorage.getItem("rooms")) || [];

    document.getElementById("studentCount").innerHTML = students.length;
    document.getElementById("examCount").innerHTML = exams.length;
    document.getElementById("roomCount").innerHTML = rooms.length;
}
function generateStudents() {

    let students = [];

    let branches = ["CSE", "ECE", "EEE", "MECH"];
    let sections = ["A", "B"];

    for (let i = 1; i <= 500; i++) {

        let student = {
            id: "S" + String(i).padStart(3, "0"),
            name: "Student " + i,
            branch: branches[(i - 1) % branches.length],
            year: 1,
            section: sections[(i - 1) % sections.length]
        };

        students.push(student);
    }

    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("studentMessage").innerHTML =
        "500 students added successfully!";

    displayStudents();
}