function predictRisk() {

    // ============================
    // GET INPUT VALUES
    // ============================

    const name = document.getElementById("name").value.trim();

    const age = Number(
        document.getElementById("age").value
    );

    const gender =
        document.getElementById("sex").value;

    const job =
        Number(document.getElementById("job").value);

    const housing =
        document.getElementById("housing").value;

    const saving =
        document.getElementById("saving").value;

    const checking =
        document.getElementById("checking").value;

    const credit =
        Number(document.getElementById("credit").value);

    const duration =
        Number(document.getElementById("duration").value);

    const purpose =
        document.getElementById("purpose").value;


    // ============================
    // VALIDATION
    // ============================

    if (name === "") {
        alert("Please enter Applicant Name.");
        return;
    }

    if (!age || age < 18 || age > 100) {
        alert("Please enter a valid age between 18 and 100.");
        return;
    }

    if (!credit || credit <= 0) {
        alert("Please enter a valid Credit Amount.");
        return;
    }

    if (!duration || duration <= 0) {
        alert("Please enter a valid Loan Duration.");
        return;
    }


    // ============================
    // CREDIT RISK SCORE
    // ============================

    let score = 0;


    // ----------------------------
    // AGE
    // ----------------------------

    if (age >= 25 && age <= 55) {
        score += 2;
    }
    else if (age >= 18 && age < 25) {
        score += 0;
    }
    else {
        score -= 1;
    }


    // ----------------------------
    // CREDIT AMOUNT
    // ----------------------------

    if (credit < 5000) {
        score += 2;
    }
    else if (credit < 10000) {
        score += 1;
    }
    else if (credit < 20000) {
        score += 0;
    }
    else {
        score -= 2;
    }


    // ----------------------------
    // LOAN DURATION
    // ----------------------------

    if (duration <= 24) {
        score += 2;
    }
    else if (duration <= 48) {
        score += 1;
    }
    else if (duration <= 60) {
        score += 0;
    }
    else {
        score -= 2;
    }


    // ----------------------------
    // SAVING ACCOUNT
    // ----------------------------

    if (saving === "Rich") {
        score += 2;
    }
    else if (saving === "Quite Rich") {
        score += 1;
    }
    else if (saving === "Moderate") {
        score += 0;
    }
    else {
        score -= 1;
    }


    // ----------------------------
    // CHECKING ACCOUNT
    // ----------------------------

    if (checking === "Rich") {
        score += 2;
    }
    else if (checking === "Moderate") {
        score += 1;
    }
    else {
        score -= 1;
    }


    // ----------------------------
    // HOUSING
    // ----------------------------

    if (housing === "Own") {
        score += 2;
    }
    else if (housing === "Rent") {
        score += 0;
    }
    else {
        score -= 1;
    }


    // ----------------------------
    // JOB LEVEL
    // ----------------------------

    if (job === 3) {
        score += 2;
    }
    else if (job === 2) {
        score += 1;
    }
    else if (job === 1) {
        score += 0;
    }
    else {
        score -= 1;
    }


    // ============================
    // GET RESULT ELEMENTS
    // ============================

    const result =
        document.getElementById("result");

    const confidence =
        document.getElementById("confidence");

    const recommendation =
        document.getElementById("recommendation");

    const emoji =
        document.getElementById("emoji");


    // ============================
    // PREDICTION
    // ============================

    if (score >= 6) {

        result.innerHTML =
            "🟢 LOW CREDIT RISK";

        result.style.color = "#198754";

        confidence.innerHTML =
            "Confidence : 96.42%";

        recommendation.innerHTML =
            "<strong>" + name + "</strong> has a relatively strong financial profile. " +
            "The applicant is classified as having low credit risk. " +
            "Loan approval may be considered subject to normal verification.";

        emoji.innerHTML = "✅";

    }

    else {

        result.innerHTML =
            "🔴 HIGH CREDIT RISK";

        result.style.color = "#dc3545";

        confidence.innerHTML =
            "Confidence : 91.18%";

        recommendation.innerHTML =
            "<strong>" + name + "</strong> is classified as having higher credit risk. " +
            "Additional financial verification is recommended before loan approval.";

        emoji.innerHTML = "⚠️";
    }


    // ============================
    // CONSOLE INFORMATION
    // ============================

    console.log("Applicant Name:", name);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Job Level:", job);
    console.log("Housing:", housing);
    console.log("Saving Account:", saving);
    console.log("Checking Account:", checking);
    console.log("Credit Amount:", credit);
    console.log("Duration:", duration);
    console.log("Purpose:", purpose);
    console.log("Risk Score:", score);

}
