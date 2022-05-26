let cl=console.log;

// enums 1

// 1 >> candidate
// 2 >> admin
// 3 superadmin


// ADMIN


// enums 1
// 1 >> candidate
// 2 >> admin
// 3 superadmin
// ADMIN >> admin
// READ ONLY USER >>candidate
// SUPERADMIN >>super admin

enum Role {ADMIN=100,READ_ONLY_USER,SUPER_ADMIN}
var person = {
    fname: "vishakha",
    lname: "gaikwad",
    email: "vishakha@gmail.com",
    token: "qw",
    role: Role.ADMIN
};

if(person.role === Role.ADMIN){
    cl("this is candidate");
}
if(person.role === Role.ADMIN){
    cl("this id admin")
}
cl(Role.ADMIN);
cl(Role.READ_ONLY_USER);
cl(Role.SUPER_ADMIN);