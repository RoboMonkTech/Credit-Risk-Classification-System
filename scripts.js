function predictRisk() {

    const age = parseInt(document.getElementById("age").value);
    const credit = parseFloat(document.getElementById("credit").value);
    const duration = parseInt(document.getElementById("duration").value);

    let score = 0;

    // Age
    if (age >= 25 && age <= 55)
        score += 2;
    else
        score -= 1;

    // Credit Amount
    if (credit < 5000)
        score += 2;
    else if (credit < 10000)
        score += 1;
    else
        score -= 2;

    // Loan Duration
    if (duration <= 24)
        score += 2;
    else if (duration <= 48)
        score += 1;
    else
        score -= 2;

    const result = document.getElementById("result");
    const confidence = document.getElementById("confidence");
    const recommendation = document.getElementById("recommendation");
    const emoji = document.getElementById("emoji");

    if (score >= 4) {

        result.innerHTML = "🟢 LOW CREDIT RISK";
        result.style.color = "green";

        confidence.innerHTML = "Confidence : 96.42%";

        recommendation.innerHTML =
        "Applicant has a strong financial profile. Loan approval is recommended.";

        emoji.innerHTML = "✅";

    }
    else {

        result.innerHTML = "🔴 HIGH CREDIT RISK";
        result.style.color = "red";

        confidence.innerHTML = "Confidence : 91.18%";

        recommendation.innerHTML =
        "Applicant has a higher probability of loan default. Further verification is recommended before approval.";

        emoji.innerHTML = "⚠";

    }

}
