
function fibonacciGenerator(n) {

    var fibonacci = [];

    if (n > 0) {
        fibonacci.push(0);
        if (n > 1) {
            fibonacci.push(1);
            if (n > 2) {
                for (var i = 2; i < n; i++) {
                    fibonacci.push((fibonacci[(i - 1)] + fibonacci[i - 2]));
                }
            }
        }
    }


    console.log(fibonacci);
}

fibonacciGenerator(15);