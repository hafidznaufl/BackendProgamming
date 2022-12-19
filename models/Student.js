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

    static create(data) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO students SET ?`
            
            db.query(query, data, (err, results) => {
                resolve(results)
            })
        });

    }
}

module.exports = Student;