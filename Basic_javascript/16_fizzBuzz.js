var output = [];

function fizzBuzz() {
    var i = 1;
    while ( i <= 100) {
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
        i++;
    }
}

fizzBuzz();

console.log(output);