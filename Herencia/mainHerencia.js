//Comencem amb herencia.

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
}

const cursoProgBasica = new Course({
    name: "Curso Basico de Programación Básica",
    isFree: true,
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english",
});
const cursoDataBusiness = new Course({
    name: "Curso DataBusiness",
});
const cursoDataViz = new Course({
    name: "Curso Dataviz",
});


class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        cursoDataBusiness,
        cursoDataViz,
    ],
});


// Classe Mare 

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

// Classes Filles
class FreeStudent extends Student {
    constructor(props) {
        super(props);

    }

    approvedCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + " Only can take free courses. ");
        }
    }

}

class BasicStudent extends Student {
    constructor(props) {
        super(props);

    }

    approvedCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + "You cannot take courses in english. ");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);

    }

    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

const juandc = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    twitter: "fjuandc",
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ],
});


const pepe = new BasicStudent({
    name: "Pepito",
    username: "pepea",
    twitter: "pepete14",
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ],
});

