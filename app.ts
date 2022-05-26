let cl =console.log;
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





function add2(n1:number, n2:number,showresult:boolean,phrase:string){
    if(showresult ===true){
        let result =n1+n2
        cl(`${phrase}${result}`);
    }else{
        return n1+n2;
    }
 }
 let num1 :number=20;
let num2 =500;
let printresult =true;
let text = "the result is"

add2(num1 ,num2,printresult,text);



// type inference =>> if we declasre a property and assign a value to it typescript will assign to tyat datatype and this is called typeinferece


// let x=20;
let y : number;

y=20; 
// y="hello";
// y=true;