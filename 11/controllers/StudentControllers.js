const hero = require('../data/hero.js')

class StudentController {

    index( req, res ){
        const data = {
            message: "Menampilkan Data Semua Students",
            data: [...hero],
        }

        res.json(data)
    }

    store ( req, res ){
        const { nama } = req.body;
        hero.push(nama)
        const data = {
            message: `Menambahkan Students ${ nama }`,
            data: [...hero]
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