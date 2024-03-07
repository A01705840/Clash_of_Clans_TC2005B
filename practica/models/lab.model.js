const labs = [{
    idlab: 1,
    nombre: 'Lab 1: Introducción a las aplicaciones web, HTML5 y ciclo de vida de los sistemas de información',
    semana: 1,
    status: 1
    },
    {
    idlab: 2,
    nombre: 'Lab 2: Control de Versiones',
    semana: 1,
    status: 1
    },
    {
    idlab: 3,
    nombre: 'Lab 3: Introducción a CSS',
    semana: 1,
    status: 1
    },
    {
    idlab: 4,
    nombre: 'Lab 4: Fundamentos de JavaScript',
    semana: 1,
    status: 1
    },
    {
    idlab: 5,
    nombre: 'Lab 5: Frameworks de estilo',
    semana: 1,
    status: 1
},
{
    idlab: 6,
    nombre: 'Lab 6: Programación Orientada a Eventos',
    semana: 2,
    status: 1
    },
    {
    idlab: 7,
    nombre: 'Lab 7: Manejo de ramas',
    semana: 2,
    status: 1
    },
    {
    idlab: 8,
    nombre: 'Lab 8: Introducción al backend con Node.js',
    semana: 2,
    status: 1
    },
    {
    idlab: 9,
    nombre: 'Lab 9: DBMS de escritorio',
    semana: 3,
    status: 1
    },
    {
    idlab: 10,
    nombre: 'Lab 10: Rutas y formas',
    semana: 3,
    status: 1
    },
    {
    idlab: 11,
    nombre: 'Lab 11: Express',
    semana: 3,
    status: 1
    },
    {
    idlab: 12,
    nombre: 'Lab 12: HTML Dinámico',
    semana: 3,
    status: 1
    },
    {
    idlab: 13,
    nombre: 'Lab 13: MVC',
    semana: 4,
    status: 1
    },
    {
    idlab: 14,
    nombre: 'Lab 14: Manejo de sesiones y cookies',
    semana: 4,
    status: 1
    }
];

module.exports = class Lab {
    constructor(mi_idlab, mi_nombre, mi_semana, mi_status){
        this.idlab = mi_idlab;
        this.nombre = mi_nombre;
        this.semana = mi_semana;
        this.status = mi_status;
    }

    save() {
        lab.push({
            idlab: this.idlab,
            nombre: this.nombre,
            semana: this.semana,
            status: this.status
        });
    }

    static fetchAll() {
        return lab;
    }
}