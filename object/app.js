var cl = console.log;
var person = {
    name: "vishakha",
    age: 22,
    hobbies: ["reading", "writing", "coding"],
    role: [2, "admin"]
};
cl(person);
var favrtactivities = ["reading", "writing", "coding"];
favrtactivities.push("100");
for (var _i = 0, favrtactivities_1 = favrtactivities; _i < favrtactivities_1.length; _i++) {
    var activities = favrtactivities_1[_i];
    cl(activities.toUpperCase());
}
for (var _a = 0, _b = person.hobbies; _a < _b.length; _a++) {
    var hobbies = _b[_a];
    cl(hobbies.toUpperCase());
}
person.role.push("superadmin");
cl(person);
person.role.push(1);
cl(person);
