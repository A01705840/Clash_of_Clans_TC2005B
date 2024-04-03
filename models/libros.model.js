const db = require('../util/database');

module.exports = class Libro {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    contructor(mi_nombre, mi_autor, mi_rating, mi_fecha){
        this.nombre = mi_nombre;
        this.autor = mi_autor;
        this.rating = mi_rating;
        this.fecha = mi_fecha;
        this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9T4eZdmlbj1NKFcbcizY5I0AkfL6t0qaidw&usqp=CAU';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 

    save() {
        return db.execute(
            `INSERT INTO libro (nombre, autor, rating, fecha, img) 
            VALUES (?, ?, ?, ?, ?)`, 
            [this.nombre, this.autor, this.rating, this.fecha, this.imagen]); //Esta es la manera larga
        
    //libros.push(this); //Agrega este objeto a la lista de libros
    }
//Métodos estáticos se ejecutan sobre la clase. No necesitan una instancia de la clase para ser ejecutados
    static fetchAll() {
        return db.execute('SELECT * FROM libro')
    }
    
    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
    static fetchOne(id) {
        return db.execute('Select * from libro WHERE id = ?', [id]);
    }
}