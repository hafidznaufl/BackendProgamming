const Student = require('../models/Student')

class StudentController {

    async index( req, res ){
        const student = await Student.all()
        
        if (student) {
            const data = {
                message: "Menampilkan Data Semua Students",
                data: student
            }
            
            return res.status(200).json(data)
        } else {
            const data = {
                message: "Student Not Found",
            }
            
            return res.status(404).json(data)
        }
    }

    async store ( req, res ){
        const { nama, nim, email, jurusan } = req.body;

        if( !nama || !nim || !email || !jurusan){
            const data = {
                message: `Semua data harus dikirim`
            }

            return res.status(201).json(data)
        }

        const value = {
            nama : nama,
            nim : nim,
            email : email,
            jurusan : jurusan
        }

        const student = await Student.create( value )

        const data = {
            message: `Menambahkan Students ${student}`,
            data: student
        }

        res.status(201).json(data)

    }

    async update( req, res ){
        const { id } = req.params
        const student = Student.find(id)

        if (student) {
            const student = await Student.update(id, req.body)
            const data = {
                message: `Mengedit Data Students`,
                data: student
            }

            res.status(200).json(data);
        } else {
            const data = {
                message: `Student Not Found`,
            }

            res.status(404).json(data);
        }

    }

    async destroy( req, res ){
        const { id } = req.params
        const student = await Student.find(id)

        if (student) {
            await Student.delete(id)
            const data = {
                message: `Menghapus Data Students`
            }

            res.status(200).json(data)
        } else {
            const data = {
                message: `Student Not Found`
            }

            res.status(404).json(data)
        }
    }

    async show( req, res ){
        const { id } = req.params
        const student = await Student.find(id)

        if (student) {
            const data = {
                message: `Menampilkan Data Student`,
                data: student
            }

            res.status(200).json(data)
        } else {
            const data = {
                message: `Student Not Found`
            }
            res.status(200).json(data)
        }
    }
};

const object = new StudentController();

module.exports = object;