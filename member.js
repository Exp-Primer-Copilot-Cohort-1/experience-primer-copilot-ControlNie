function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "React", "Node"],
        details: function() {
            console.log(this.name + " is " + this.age + " years old and has skills in " + this.skills);
        }
    };
    return member;
}