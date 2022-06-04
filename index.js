function add(a,b) {
    return (a + b);
}

function subtract(a,b) {
    return (a - b);
}

function multiply(a,b) {
    return (a * b);
}

function divide(a,b) {
    return (a / b);
}

function increment(n) {
    n++;
    return n;
}

function decrement(n) {
    n--;
    return n;
}

function makeInt(n) {
    let x = parseInt(n, 10);
    return x;
}

console.log(makeInt(5.7777));

function preserveDecimal(n) {
    let y = parseFloat(n);
    return y;
}

console.log(preserveDecimal('oops'));