let cl = console.log;
function combine(num1:number | string,num2:number | string){
    let result
    if(typeof num1 ==="number" && typeof num2 ==="number"){
     result = num1+num2;
    }else{
        result = num1.toString() + num2.toString()
    }
    return result
}
let add = combine(20,30)
cl(add);

let com1 = combine("hello","ts");
cl(com1)