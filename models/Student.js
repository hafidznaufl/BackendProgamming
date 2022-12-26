const db = require('../config/database')

class Student {
    static all() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM students'

            db.query(query, (err, results) => {
                resolve(results)
            })
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM students WHERE id = ?'

            db.query(query, id, (err, results) => {
                const [student] = results
                resolve(student)
            })
        });
    }

    static async create(data) {
        const id = await new Promise((resolve, reject) => {
            const query = `INSERT INTO students SET ?`
            
            db.query(query, data, (err, results) => {
                resolve( results.insertId )
            })
        });

        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM students WHERE id = ?`

            db.query(query, id, (err, results) => {
                resolve(results)
            })
        });

    }

    static async update(id, data){
        await new Promise((resolve, reject) => {
            const query = 'UPDATE students SET ? WHERE id = ?'

            db.query(query, [data, id], (err, results) => {
                resolve(results)
            })
        });

        const student = await this.find(id)
        return student
    }

    static async delete(id){
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM students WHERE id = ?'

            db.query(query, id, (err, results) => {
                resolve(results)
            })
        });
    }



}

module.exports = Student;