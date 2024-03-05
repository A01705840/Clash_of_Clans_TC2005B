
const libros = [{
    nombre: "The Left Hand of Darkness", 
    autor: "Ursula K. Le Guin", 
    rating: 100, 
    fecha: 1969, 
    imagen: 'https://i.pinimg.com/564x/ae/8a/22/ae8a22093f108e52c1309e430edc3b67.jpg'
    },
    {
    nombre: "I Have No Mouth, and I Must Scream", 
    autor: "Harlan Ellison", 
    rsting: 90, 
    fecha: 1967,
    imagen: 'https://i.pinimg.com/564x/01/7f/3d/017f3d4c4ee8ead03008a31dbdc71cbe.jpg'
    }, 
    {
    nombre: "LAPVONA", 
    autor: "Ottesa Moshfegh", 
    rating: 90, 
    fecha: 2022,
    imagen: 'https://i.pinimg.com/564x/dc/2a/ef/dc2aef8de25e302f09f6f43157c5f441.jpg'
    },
    {
    nombre: "La Muerte de Ivan Ilich", 
    autor: "Leon Tolstoi", 
    rating: 80, 
    fecha: 1886,
    imagen: 'https://i.pinimg.com/564x/62/d8/b1/62d8b1eeed930d7336965b5ad66cf898.jpg'
    }
];

module.exports = class Libro {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    contructur(mi_nombre, mi_autor, mi_rating, mi_fecha){
        this.nombre = mi_nombre;
        this.autor = mi_autor;
        this.rating = mi_rating;
        this.fecha = mi_fecha;
        this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9T4eZdmlbj1NKFcbcizY5I0AkfL6t0qaidw&usqp=CAU';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 

    save() {
    libros.push({
        nombre: this.nombre,
        autor: this.autor,
        rating: this.rating,
        fecha: this.fecha,
        imagen: this.imagen
        }); //Esta es la manera larga
        
    //libros.push(this); //Agrega este objeto a la lista de libros
    }
//Métodos estáticos se ejecutan sobre la clase. No necesitan una instancia de la clase para ser ejecutados
    static fetchAll() {
        return libros;
    }
}