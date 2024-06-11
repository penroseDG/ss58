import { useEffect } from 'react'
import axios from 'axios'

export default function Sort() {
    /*
      tiến hành sắp xếp theo những điều kiện 
      tăng dần và giảm đều 
     */
    useEffect(() => {
        // sắp xếp theo độ tuổi tăng dần trong bảng users
        axios.get('https://localhost:8080/users?_sort=age&_order=asc')
    })
    return (
        <div>

        </div>
    )
}
