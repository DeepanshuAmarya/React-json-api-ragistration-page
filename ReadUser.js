import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

function ReadUser() {
 let Navigate=useNavigate()
let [val,setval]=useState()
  useEffect(()=>{
    getdata()
  },[])
  let getdata=()=>{
    axios.get("http://localhost:3000/users").then((res)=>{
      // console.log(res.data)
      setval(res.data)
    })
  }

  let deletedata=(sno)=>{
    axios.delete("http://localhost:3000/users/"+sno).then(()=>{
      getdata()
      Navigate('/read')
    })
  }
  return (
   <>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">City</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {val?<tbody>
    {val.map((item)=>{
      return(
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.age}</td>
          <td>{item.city}</td>
          <td>
            <Link to={"/delete/"+item.id} className="me-4" onClick={()=>{deletedata(item.id)}}>Delete</Link>
            <Link to={"/update/"+item.id} className="ms-2">Edit</Link>
          </td>
        </tr>
      )
    })}
  </tbody>:<p>No Data</p>}
</table>
   </>
  )
}

export default ReadUser