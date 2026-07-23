let expression = "";

function addValue(value) {

    if (expression === "" && value === "0") {
        expression = "0";
    } else {

        if (expression === "0") {
            expression = value;
        } else {
            expression += value;
        }

    }

    document.getElementById("output").innerText = expression;
}

function calculate() {

    try {

        expression = eval(expression).toString();
        document.getElementById("output").innerText = expression;

    } catch (error) {

        document.getElementById("output").innerText = "Error";
        expression = "";

    }

}

function clearDisplay() {

    expression = "";
    document.getElementById("output").innerText = "0";

}