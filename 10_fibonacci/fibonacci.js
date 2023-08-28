const fibonacci = function(num) {
    let fib = Number(num);
    if (fib < 0) {
        return "OOPS";
    }
    if (fib <= 1) {
        return fib;
    }
    return (fibonacci(num - 1) + fibonacci(num -2));
};

// Do not edit below this line
module.exports = fibonacci;
