<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Student Grade Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>Grade Calculator</h1>

    <div class="section-box">
        <h3>Quizzes (20% Weight)</h3>
        <div class="input-group">
            <input type="number" id="quizCount" placeholder="How many quizzes?">
            <button id="generateQuizzes">Set</button>
        </div>
        <div id="quizInputs" class="dynamic-container"></div>
    </div>

    <div class="section-box">
        <h3>Exams (30% Weight)</h3>
        <div class="input-group">
            <input type="number" id="examCount" placeholder="How many exams?">
            <button id="generateExams">Set</button>
        </div>
        <div id="examInputs" class="dynamic-container"></div>
    </div>

    <div class="section-box">
        <h3>MCOs (50% Total)</h3>
        <div class="mco-inputs">
            <input type="number" id="mco1" placeholder="MCO 1 Score (0-100)">
            <input type="number" id="mco2" placeholder="MCO 2 Score (0-100)">
        </div>
    </div>

    <div class="buttons">
        <button id="calculate" class="btn-calc">Calculate Grade</button>
        <button id="reset" class="btn-reset">Reset All</button>
    </div>

    <div class="result-card">
        <div class="result-item">
            <span>Final Grade:</span>
            <span id="finalGrade" class="highlight">-</span>
        </div>
        <div class="result-item">
            <span>Equivalent:</span>
            <span id="gradeEquivalent" class="highlight">-</span>
        </div>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
