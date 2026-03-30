function analyzeProductivity() {
    let study = parseFloat(document.getElementById("study").value) || 0;
    let exercise = parseFloat(document.getElementById("exercise").value) || 0;
    let sleep = parseFloat(document.getElementById("sleep").value) || 0;
    let screen = parseFloat(document.getElementById("screen").value) || 0;
    let goals = parseInt(document.getElementById("goals").value) || 0;

    let score = 0;

    if (study >= 8) score += 35;
    else if (study >= 5) score += 25;
    else if (study >= 2) score += 10;

    if (exercise >= 1) score += 20;
    else if (exercise > 0) score += 10;

    if (sleep >= 7 && sleep <= 8) score += 20;
    else if (sleep >= 5) score += 10;

    score += goals * 5;

    if (screen >= 6) score -= 20;
    else if (screen >= 4) score -= 10;

    score = Math.max(0, Math.min(score, 100));

    let level = "";
    let suggestion = "";
    const resultBox = document.getElementById("result");

    resultBox.classList.remove("productive", "moderate", "lazy");

    if (score >= 70) {
        level = "Productive";
        suggestion = "Excellent! Keep following this routine.";
        resultBox.classList.add("productive");
    } else if (score >= 40) {
        level = "Moderate";
        suggestion = "Good, but you can reduce distractions and improve.";
        resultBox.classList.add("moderate");
    } else {
        level = "Lazy";
        suggestion = "Try planning your day and spending less time on distractions.";
        resultBox.classList.add("lazy");
    }

    document.getElementById("level").textContent = level;
    document.getElementById("score").textContent = score;
    document.getElementById("suggestion").textContent = suggestion;

    resultBox.classList.remove("hidden");
}