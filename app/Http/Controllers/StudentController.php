<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    # method index - get all resources
    public function index()
    {
        # menggunakan model Student untuk select data
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students,
        ];

        # menggunakan response json laravel
        # otomatis set header content type json
        # otomatis mengubah data array ke JSON
        # mengatur status code
        return response()->json($data, 200);
    }

    # menambahkan resource student
    # membuat method store
    public function store(Request $request)
    {
        # menangkap data request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        # menggunakan Student untuk insert data
        $student = Student::create($input);

        $data = [
            'message' => 'Student is created successfully',
            'data' => $student,
        ];

        # mengembalikan data (json) status code 201
        return response()->json($data, 201);
    }

    public function update(Request $data, $id)
    {
        $student = Student::find($id)->first();
        $student->update($data->toArray());

        if ($student) {

            $data = [
                'message' => 'Succeed To Update Student',
                'data' => $student,
            ];
    
            return response()->json($data, 201);

        }else {
            $data = [
                'message' => 'Student Not Found'
            ];
            
            return response()->json($data, 404);
        }
    }
    
    public function delete(Request $data, $id)
    {
        $student = Student::find($id)->first();
        $student->delete($data->toArray());

        if ($student) {

            $data = [
                'message' => 'Succeed To Delete',
                'data' => $student,
            ];
    
            return response()->json($data, 201);

        }else {
            $data = [
                'message' => 'Cannot Delete Data Cause Data not Found'
            ];
            
            return response()->json($data, 404);
        }
    }

    public function show($id)
    {
        $student = Student::find($id);

        if ($student) {

            $data = [
                'message' => 'Get Detail Student',
                'data' => $student,
            ];
    
            return response()->json($data, 201);

        }else {
            $data = [
                'message' => 'Student Not Found'
            ];
            
            return response()->json($data, 404);
        }
    }
}