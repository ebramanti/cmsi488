var StringScanner = require("strscan").StringScanner
function evaluatePolynomial(scanner, x) {
    negative = scanner.scan(/-/);
    value = parseTerm(scanner, x);
    value = negative ? -value : value;
    while(scanner.scan(/[+-]/)){
        operator = scanner.getMatch()
        value += (operator === '+' ? 1 : -1) * parseTerm(scanner, x);
    }
    return value;
}
function parseTerm(scanner, x) {
    var coefficient = 1;
    var exponent = 0;
    var lexeme = scanner.scan(/\d+/);
    if (lexeme) {
        coefficient = lexeme;
    }
    if(scanner.scan(/x/)) {
        exponent = 1;
        if(scanner.scan(/\^/)) {
            exponent = scanner.scan(/\d+/);
        }
    }
    return coefficient * (Math.pow(x, exponent));
}
var s = new StringScanner(process.argv[2])
if (process.argv.length < 4) {
    console.log("Not enough arguments. Requires polynomial and x-value.");
} else if (process.argv.length > 4) {
    console.log("Too many arguments. Only requires polynomial and x-value.");
} else {
    console.log(evaluatePolynomial(s, process.argv[3]))
}