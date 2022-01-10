const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprovados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprovados.push(nuevoCurso);
    },
};

// natalia.cursosAprovados.push("Curso de Responsive Desing");

function Student(name, age, cursosAprovados) {

    this.name = name;
    this.age = age;
    this.cursosAprovados = cursosAprovados;
    //  this.aprobarCurso = function (nuevoCurso){
    //        this.cursosAprovados.push(nuevoCurso);
    //    },
};

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprovados.push(nuevoCurso);
};

const juanita = new Student(
    "Juanita",
    15,
    [
        "Curso de introducción a la produción de Videojuegos",
        "Curso de Creación de Personajes",
    ],
);

//Prototipos con la sintaxis de Clases

class Student2 {
    constructor({
        name,
        cursosAprovados = [],
        age,
        email,
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprovados = cursosAprovados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprovados.push(nuevoCurso);
    }
}

const Miquel = new Student2({
    name: "Miquel",
    age: 28,
    email: "miquel@MediaList.com",
});