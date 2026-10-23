var input = document.getElementById("input");


function addValue(value) {
    var lastChar = input.value.slice(-1);

    if ("+-*/".includes(value) && "+-*/".includes(lastChar)) {
        return;
    }

    if (value === "/") {
        input.value += "÷";
    } else if (value === "*") {
        input.value += "×";
    } else {
        input.value += value;
    }
}

function calculate() {
    input.value = eval(
        input.value.replace(/÷/g, "/").replace(/×/g, "*")
    );
}


function allClear() {
    input.value = ""
}

function valueClear() {
    var value = input.value;
    input.value = value.slice(0, -1)
}
