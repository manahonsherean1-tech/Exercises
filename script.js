// DOM Elements
const quizInputsDiv = document.getElementById("quizInputs");
const examInputsDiv = document.getElementById("examInputs");

// Helper function to generate inputs
function generateFields(countId, container, className, label) {
    const count = parseInt(document.getElementById(countId).value);
    container.innerHTML = ""; // Clear existing
    
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    for (let i = 1; i <= count; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = `${label} ${i} score`;
        input.classList.add(className);
        container.appendChild(input);
    }
}

// Helper to calculate average of a group of inputs
function calculateAverage(className) {
    const elements = document.querySelectorAll(`.${className}`);
    if (elements.length === 0) return 0;
    
    let sum = 0;
    let validCount = 0;
    
    elements.forEach(el => {
        const val = parseFloat(el.value);
        if (!isNaN(val)) {
            sum += val;
            validCount++;
        }
    });
    
    return validCount > 0 ? sum / validCount : 0;
}

// Event Listeners for Generation
document.getElementById("generateQuizzes").addEventListener("click", () => {
    generateFields("quizCount", quizInputsDiv, "quiz-val", "Quiz");
});

document.getElementById("generateExams").addEventListener("click", () => {
    generateFields("examCount", examInputsDiv, "exam-val", "Exam");
});

// Calculation Logic
document.getElementById("calculate").addEventListener("click", () => {
    const quizAvg = calculateAverage("quiz-val");
    const examAvg = calculateAverage("exam-val");
    
    const mco1 = parseFloat(document.getElementById("mco1").value) || 0;
    const mco2 = parseFloat(document.getElementById("mco2").value) || 0;

    // Weightage: Quizzes (20%), Exams (30%), MCO1 (25%), MCO2 (25%)
    const finalScore = (quizAvg * 0.20) + (examAvg * 0.30) + (mco1 * 0.25) + (mco2 * 0.25);

    // Display Result
    document.getElementById("finalGrade").textContent = finalScore.toFixed(2);

    // Equivalent Logic
    let letter = "F";
    if (finalScore >= 90) letter = "A";
    else if (finalScore >= 80) letter = "B";
    else if (finalScore >= 70) letter = "C";
    else if (finalScore >= 60) letter = "D";
    
    document.getElementById("gradeEquivalent").textContent = letter;
});

// Reset Logic
document.getElementById("reset").addEventListener("click", () => {
    location.reload(); // Simplest way to clear dynamic fields and values
});