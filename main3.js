class Student {
    constructor({
        name,
        age,
        email,
        twitter = undefined,
        instagram,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.socialMedia = {
            twitter,
            instagram,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
};

const juandc = new Student({
    name: "JuanDC",
    username: "juandc",
    twitter: "fjuandc",
})


const pepe = new Student({
    name: "Pepito",
    username: "pepea",
    twitter: "pepete14",
})

