const nameInput = document.getElementById("studentName");
const markInput = document.getElementById("studentMark");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");
const studentList = document.getElementById("studentList");

submitBtn.addEventListener("click", function () {

    const studentName = nameInput.value.trim();
    const studentMark = parseInt(markInput.value);

    if (studentName === "") {
        resultDiv.textContent = "Please enter a student name.";
        return;
    }

    if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
        resultDiv.textContent = "Please enter a valid mark between 0 and 100.";
        return;
    }

    let result;
    let grade;

    if (studentMark >= 80) {
        result = "PASS";
        grade = "Distinction";
    } else if (studentMark >= 65) {
        result = "PASS";
        grade = "Merit";
    } else if (studentMark >= 50) {
        result = "PASS";
        grade = "Pass";
    } else {
        result = "FAIL";
        grade = "Fail";
    }

    resultDiv.textContent =
        `${studentName} scored ${studentMark}% - ${result} (${grade})`;

    const li = document.createElement("li");
    li.textContent =
        `${studentName} - ${studentMark}% - ${result} (${grade})`;

    studentList.appendChild(li);

    nameInput.value = "";
    markInput.value = "";
});