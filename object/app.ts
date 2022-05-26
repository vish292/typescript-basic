let cl = console.log;

let person :{name:string,age:number,hobbies:string[],role:[number,string,boolean,boolean,boolean]}={
    name:"vishakha",
    age:22,
    hobbies:["reading","writing","coding"],
    role:[2,"Admin",true,false,true]
}

cl(person);





let favrtactivities :string[]=["reading","writing","coding"]
favrtactivities.push("100");

for(let activities of favrtactivities ){
    cl(activities.toUpperCase());
}

for(let hobbies of person.hobbies){
    cl(hobbies.toUpperCase());
}

person.role.push("superadmin");
cl(person);

person.role.push(1);
cl(person);

// tupels >> have to value of different datatype
person.role = [10,"Admin",false,true,false];
person.role.push("fault");
cl(person.role);


let mono:number = 11;
let myname:string="vish"; 
 let mynameandnum : [number,string]=[11,"vish"]
 // here mynameandnum is tupel