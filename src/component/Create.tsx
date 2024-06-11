import {useEffect} from "react";
import axios from 'axios';
export default function Create() {
    /*
      tiến hành thêm dữ liệu vào bảng users 
      khi thêm dữ liệu thì dùng phương thức POST  
     */
    useEffect (()=> {
        let newUser =  {
            name : "trang",
            email : "bica@gmail.com"
        }
        axios.post("http://localhost:8080/users")
    })
    return (
        <div>
         Create
        </div>
    )
}
