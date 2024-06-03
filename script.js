
//qaliq

function calculateModulo(a, divisor) {
    return a % divisor;
}

function checkCondition(value, threshold) {
    return value > threshold;
}

let a = 4292492459593059;
let q1 = calculateModulo(a, 33);

if (checkCondition(q1, 30)) {
    let q2 = calculateModulo(q1, 14);
    
    if (checkCondition(q2, 10)) {
        let q3 = calculateModulo(q2, 5);
        console.log(q3);
    } else {
        console.log("q2 10-dan böyük deyil: " + q2);
    }
} else {
    console.log("q1 30-dan böyük deyil: " + q1);
}


//DUzbucaqli 


function getUserInput(promptMessage) {
    return parseFloat(prompt(promptMessage));
}


function calculateArea(en, uzunluq) {
    return en * uzunluq;
}


function calculatePerimeter(en, uzunluq) {
    return 2 * (en + uzunluq);
}


function main() {
    let en = getUserInput("Eni daxil edin:");
    let uzunluq = getUserInput("Uzunluğu daxil edin:");

    if (en > 10 && uzunluq > 10) {
        let sahə = calculateArea(en, uzunluq);
        console.log("Düzbucaqlının sahəsi: " + sahə);
    } else {
        let perimetr = calculatePerimeter(en, uzunluq);
        console.log("Düzbucaqlının perimetri: " + perimetr);
    }
}


main();
