var cl = console.log;
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var add = combine(20, 30);
cl(add);
var com1 = combine("hello", "ts");
cl(com1);
