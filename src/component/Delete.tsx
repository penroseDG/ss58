import React, { useEffect } from 'react'
import axios from 'axios'

export default function Delete() {
  /*
    dùng thư viện axios để xóa user trong bảng users 
    khi xóa thì dùng phương thức DELETE
  */
  useEffect(()=>{
    // khi xóa cần truyền id của thằng muốn xóa
    axios.delete("http://localhost:8080/users/1")
  },[])
  return (
    <div>Delete
      
    </div>
  )
}