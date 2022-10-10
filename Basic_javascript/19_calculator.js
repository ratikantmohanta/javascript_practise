function add(num1, num2) {
    return num1 + num2;
}


function multiply(num1, num2) {
    return num1 * num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}



//   example of higher order function

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(calculator(3, 6, sub));



// anonymus function (assigning anonymus function to variables is inline function)
var anonFunc = function () {
    console.log("anonymus function got called");
};

anonFunc();


//arrow function

let arrFunc = () => {
    console.log("arrow function got called");
  } 

arrFunc(); 