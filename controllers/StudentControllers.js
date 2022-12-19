const Student = require('../models/Student')

class StudentController {

    async index( req, res ){
        const students = await Student.all()
        
        const data = {
            message: "Menampilkan Data Semua Students",
            data: students
        }

        res.json(data)
    }

    async store ( req, res ){
        const { nama, nim, email, jurusan } = req.body;

        const value = {
            nama : nama,
            nim : nim,
            email : email,
            jurusan : jurusan
        }

        const students = await Student.create( value )

        const data = {
            message: `Menambahkan Students ${students}`,
            data: students
        }

        res.json(data)

    }

    update( req, res){
        const { id } = req.params;
        const param = id - 1
        const { nama } = req.body;
        hero.splice( param, 1, nama)
        const data = {
            message: `Mengedit Data Student id : ${id} Nama : ${ nama }`,
            data: [...hero],
        }

        res.json(data)

    }

    destroy( req, res ){
        const { id } = req.params;
        const param = id - 1
        hero.splice(param, 1);
        const data = {
            message: `Menghapus Data Students id : ${id}`,
            data: [...hero],
        }

        res.json(data)
    }
};

const object = new StudentController();

module.exports = object;