//Partim de main3.js
//Modificat a la classe 11/17 de Poo en JavaScript

function videoPlay(id){
    const urlSecreta = "https://platzisecret.com/" + id;
    console.log("se esta reproduciendo desde la url " + urlSecreta);
};


function videoStop(id){
    const urlSecreta = "https://platzisecret.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
};

export class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }
}


class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }
    get name(){
        return this._name;
    }

    changeName(nuevoNombre){
        this._name= nuevoNombre
    }

    set name(nuevoNombre){
        if(nuevoNombre === "Curso Malo"){
            console.error("Web.... no");
        }else {
            this._name = nuevoNombre;
        }
    }
};




const cursoProgBasica = new Course({
    name: "Curso gratis de Programación Básica",
});

//exemple
cursoProgBasica.name;
// Curso gratis de Programación Básica
//per canviar el nom:
//cursoProgBasica.changeName("Pepe Programa");

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
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
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ],
});


const pepe = new Student({
    name: "Pepito",
    username: "pepea",
    twitter: "pepete14",
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ],
});

