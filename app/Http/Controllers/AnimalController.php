<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    #Animal Array
    public $animals = ['Kucing','Ayam','Ikan'];

    public function index()
    {
        foreach ($this->animals as $obj) {
            echo $obj . ', ';
        }
        # gunakan foreach untuk menampilkan data animals (array)
    }

    # method store - menambahkan hewan baru
    # parameter: hewan baru
    public function store(Request $data)
    {
        array_push($this->animals, $data->newAnimal);
        $this->index();
        # gunakan method array_push untuk menambahkan data baru
    }

    # method update - mengupdate hewan
    # parameter: index dan hewan baru
    public function update(Request $data, $id)
    {
        $this->animals[$index] = $data->newAnimal;
    }

    # method delete - menghapus hewan
    # parameter: index
    public function destroy($id)
    {
        array_splice($this->animals, $id);
        # gunakan method unset atau array_splice untuk menghapus data array
    }

}
