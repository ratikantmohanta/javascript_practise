var output = [];

function fizzBuzz() {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 15 !== 0) {
            output.push("Fizz");
        }
        else if (i % 5 === 0 && i % 15 !== 0) {
            output.push("Buzz");
        }
        else if (i % 15 === 0) {
            output.push("FizzBuzz");
        }
        else {
            output.push(i);
        }
    }
}

fizzBuzz();

console.log(output);