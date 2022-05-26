var cl = console.log;
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["READ_ONLY_USER"] = 101] = "READ_ONLY_USER";
    Role[Role["SUPER_ADMIN"] = 102] = "SUPER_ADMIN";
})(Role || (Role = {}));
var person = {
    fname: "vishakha",
    lname: "gaikwad",
    email: "vishakha@gmail.com",
    token: "qw",
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    cl("this is candidate");
}
if (person.role === Role.ADMIN) {
    cl("this id admin");
}
cl(Role.ADMIN);
cl(Role.READ_ONLY_USER);
cl(Role.SUPER_ADMIN);
