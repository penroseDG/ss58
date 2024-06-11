import axios from "axios";
import { useEffect, useState } from "react";

interface Student {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    status: string;
    create_at: string;
}

export default function Bt2() {
    const [infor, setInfor] = useState<Student[]>([]);

    const getAllStudent = async () => {
        try {
            const res = await axios.get("http://localhost:8080/students");
            setInfor(res.data);
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const getStudentById = async (id: number) => {
        try {
            const res = await axios.get(`http://localhost:8080/students/${id}`);
            if (res.data) {
                console.log(res.data);
            } else {
                console.log("Không tìm thấy bản ghi");
            }
        } catch (err) {
            console.error("Không tìm thấy bản ghi");
        }
    };

    const removeById = async (id: number) => {
        try {
            const res = await axios.delete(`http://localhost:8080/students/${id}`);
            console.log(res.data);
            getAllStudent();
        } catch (err) {
            console.error("Error deleting record", err);
        }
    };

    const createStudent = async () => {
        const student: Student = {
            id: 0, // The ID will be set by the server or the backend database
            name: "New Student",
            email: "newstudent@example.com",
            address: "456 New St",
            phone: "555-123-4567",
            status: "active",
            create_at: new Date().toISOString()
        };

        try {
            const res = await axios.post("http://localhost:8080/students", student);
            console.log(res.data);
            getAllStudent();
        } catch (err) {
            console.error("Error creating student", err);
        }
    };

    useEffect(() => {
        getAllStudent();
    }, []);

    return (
        <>
            <table style={{ border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Create_at</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {infor.map((item: Student) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>{item.status}</td>
                            <td>{item.create_at}</td>
                            <td>
                                <button onClick={() => getStudentById(item.id)}>Get</button>
                                <button onClick={() => removeById(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={createStudent}>Add New Student</button>
        </>
    );
}
