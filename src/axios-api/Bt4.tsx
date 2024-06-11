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
            console.log(res.data);
            setInfor(res.data);
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
        </>
    );
}
