var cl = console.log;
// cl("hello");
// function add(n1:number, n2:number,showresult:boolean){
//    if(showresult ===true){
//        cl(n1+n2);
//    }else{
//        return n1+n2;
//    }
// }
// let num1 :number=20;
// let num2 =500;
// let printresult =true;
// let result =add(num1 ,num2,!printresult);
// cl(result);
// add(num1 ,num2,printresult);
function add2(n1, n2, showresult, phrase) {
    if (showresult === true) {
        var result = n1 + n2;
        cl("".concat(phrase).concat(result));
    }
    else {
        return n1 + n2;
    }
}
var num1 = 20;
var num2 = 500;
var printresult = true;
var text = "the result is";
add2(num1, num2, printresult, text);
// type inference =>> if we declasre a property and assign a value to it typescript will assign to tyat datatype and this is called typeinferece
// let x=20;
var y;
y = 20;
// y="hello";
// y=true;
