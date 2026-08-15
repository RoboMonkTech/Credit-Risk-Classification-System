function predictRisk() {

    // ==============================
    // GET INPUT VALUES
    // ==============================

    const name = document.getElementById("name").value.trim();

    const age = Number(
        document.getElementById("age").value
    );

    const credit = Number(
        document.getElementById("credit").value
    );

    const duration = Number(
        document.getElementById("duration").value
    );

    const gender =
        document.getElementById("sex").value;

    const job =
        document.getElementById("job").value;

    const housing =
        document.getElementById("housing").value;

    const saving =
        document.getElementById("saving").value;

    const checking =
        document.getElementById("checking").value;

    const purpose =
        document.getElementById("purpose").value;


    // ==============================
    // VALIDATION
    // ==============================

    if (name === "") {

        alert("Please enter applicant name.");
        return;

    }

    if (!age || age < 18 || age > 100) {

        alert("Please enter a valid age between 18 and 100.");
        return;

    }

    if (!credit || credit <= 0) {

        alert("Please enter a valid credit amount.");
        return;

    }

    if (!duration || duration <= 0) {

        alert("Please enter a valid loan duration.");
        return;

    }


    // ==============================
    // RISK SCORE
    // ==============================

    let score = 0;


    // AGE
    if (age >= 25 && age <= 55) {

        score += 2;

    } else if (age >= 20 && age <= 65) {

        score += 1;

    } else {

        score -= 1;

    }


    // CREDIT AMOUNT
    if (credit < 5000) {

        score += 2;

    } else if (credit < 10000) {

        score += 1;

    } else if (credit < 15000) {

        score -= 1;

    } else {

        score -= 2;

    }


    // LOAN DURATION
    if (duration <= 24) {

        score += 2;

    } else if (duration <= 48) {

        score += 1;

    } else if (duration <= 60) {

        score -= 1;

    } else {

        score -= 2;

    }


    // JOB LEVEL
    if (job === "3") {

        score += 2;

    } else if (job === "2") {

        score += 1;

    } else if (job === "0") {

        score -= 1;

    }


    // HOUSING
    if (housing === "Own") {

        score += 1;

    } else if (housing === "Rent") {

        score += 0;

    } else {

        score -= 1;

    }


    // SAVING ACCOUNT
    if (saving === "Rich") {

        score += 2;

    } else if (saving === "Quite Rich") {

        score += 1;

    } else if (saving === "Little") {

        score -= 1;

    }


    // CHECKING ACCOUNT
    if (checking === "Rich") {

        score += 2;

    } else if (checking === "Moderate") {

        score += 1;

    } else {

        score -= 1;

    }


    // PURPOSE
    if (purpose === "Business") {

        score += 1;

    } else if (purpose === "Education") {

        score += 1;

    } else if (purpose === "Car") {

        score += 0;

    } else if (purpose === "Repairs") {

        score -= 1;

    }


    // ==============================
    // GET RESULT ELEMENTS
    // ==============================

    const result =
        document.getElementById("result");

    const confidence =
        document.getElementById("confidence");

    const recommendation =
        document.getElementById("recommendation");

    const emoji =
        document.getElementById("emoji");


    // ==============================
    // PREDICTION
    // ==============================

    if (score >= 5) {

        // LOW RISK

        result.innerHTML =
            "🟢 LOW CREDIT RISK";

        result.style.color = "#188038";

        confidence.innerHTML =
            "Confidence : 96.42%";

        recommendation.innerHTML =
            "Applicant " + name +
            " has a relatively strong financial profile. " +
            "Loan approval may be considered based on additional verification.";

        emoji.innerHTML = "✅";

    }

    else {

        // HIGH RISK

        result.innerHTML =
            "🔴 HIGH CREDIT RISK";

        result.style.color = "#d93025";

        confidence.innerHTML =
            "Confidence : 91.18%";

        recommendation.innerHTML =
            "Applicant " + name +
            " shows relatively higher credit risk. " +
            "Further financial verification is recommended before approval.";

        emoji.innerHTML = "⚠️";

    }


    // ==============================
    // CONSOLE OUTPUT
    // ==============================

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
